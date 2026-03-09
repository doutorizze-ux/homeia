import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AIProjectService {
  private genAI: GoogleGenerativeAI;
  constructor() { this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ''); }
  async generateFloorPlan(params: any) {
    try {
      console.log("Tentando gerar projeto com IA. Params:", params);
      console.log("Variável GEMINI_API_KEY possui", process.env.GEMINI_API_KEY?.length, "caracteres.");
      // Trocado para gemini-2.5-flash pois o modelo gemini-1.5-flash/pro não é reconhecido no SDK deles/versão atual (2026)
      const model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Atue como um Arquiteto 3D e gere um layout de planta baixa para um terreno de ${params.terrenoSize}m², com ${params.bedrooms} quartos e ${params.bathrooms} banheiros (${params.style}).
Você DEVE retornar APENAS um objeto JSON com formato estrito (sem formatação markdown envolta se possível, e compatível com R3F e Three.js).
O JSON deve obedecer à estrutura:
{
  "walls": [
    { "pos": [0, 1.5, -5], "args": [10, 3, 0.2] }
  ]
}
Onde "pos" é o Vector3 [x, y, z] e "args" são as dimensões [largura, altura, profundidade]. Gere 4 a 6 paredes lógicas! Responda APENAS o JSON válido.`;

      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error: any) {
      console.error("ERRO FATAL NO GEMINI AI:", error);
      // Lança o erro com a mensagem real do Google para o usuário ver na tela!
      throw new HttpException(`Falha na IA do Google: ${error?.message || JSON.stringify(error)}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
