import { Controller, Post, Body } from '@nestjs/common';
import { AIProjectService } from './ai-project.service';
import { TechnicalGenService } from './technical-gen.service';

@Controller('projects')
export class ProjectController {
    constructor(private aiService: AIProjectService, private technicalService: TechnicalGenService) { }
    @Post('generate-plan') async generatePlan(@Body() params: any) { return this.aiService.generateFloorPlan(params); }
    @Post('generate-technical') async generateTechnical(@Body() floorPlan: any) { return this.technicalService.generateTechnicalDocs(floorPlan); }

    @Post('generate-house')
    async generateHouse(@Body() params: { lotWidth: number; lotDepth: number; bedrooms: number; bathrooms: number }) {
        return this.aiService.generateFloorPlan({ terrenoSize: params.lotWidth * params.lotDepth, bedrooms: params.bedrooms, bathrooms: params.bathrooms, style: 'Moderno' });
    }
}
