$services = "api-gateway","billing-service","budget-service","construction-service","urban-service","marketplace-service"
foreach ($s in $services) {
  $pathMain = "apps\$s\src\main.ts"
  $pathModule = "apps\$s\src\app.module.ts"
  
  $mainContent = "import { NestFactory } from '@nestjs/core';`nimport { AppModule } from './app.module';`n`nasync function bootstrap() {`n  const app = await NestFactory.create(AppModule);`n  app.enableCors();`n  const port = process.env.PORT || 3000;`n  await app.listen(port);`n  console.log(`Application is running on port ${port}`);`n}`nbootstrap();"
  
  $moduleContent = "import { Module } from '@nestjs/common';`n`n@Module({`n  imports: [],`n  controllers: [],`n  providers: [],`n})`nexport class AppModule {}"

  Set-Content -Path $pathMain -Value $mainContent
  Set-Content -Path $pathModule -Value $moduleContent
}
