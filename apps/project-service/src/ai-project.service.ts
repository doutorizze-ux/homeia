import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AIProjectService {
    private genAI: GoogleGenerativeAI;
    constructor() { this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ''); }
    async generateFloorPlan(params: any) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const prompt = `Gere uma planta baixa em JSON para um terreno de ${params.terrenoSize}m2, ${params.bedrooms} quartos, ${params.bathrooms} banheiros, estilo ${params.style}.`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}
