import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AIProjectService {
    private genAI: GoogleGenerativeAI;
    constructor() { this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ''); }
    async generateFloorPlan(params: any) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
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
    }
}
