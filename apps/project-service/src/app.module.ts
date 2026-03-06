import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectController } from './project.controller';
import { AIProjectService } from './ai-project.service';
import { TechnicalGenService } from './technical-gen.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProjectController],
  providers: [AIProjectService, TechnicalGenService],
})
export class AppModule { }
