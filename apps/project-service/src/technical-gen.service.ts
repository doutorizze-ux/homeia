import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class TechnicalGenService {
    private genAI: GoogleGenerativeAI;
    constructor() { this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ''); }
    async generateTechnicalDocs(floorPlan: any) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const prompt = `Gere documentação técnica (elétrica, hidráulica, memorial) para esta planta: ${JSON.stringify(floorPlan)}`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}
