const fs = require('fs');
const path = require('path');

const services = [
    "api-gateway",
    "billing-service",
    "budget-service",
    "construction-service",
    "urban-service",
    "marketplace-service"
];

services.forEach(s => {
    const mainTs = `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(\`Application is running on port \${port}\`);
}
bootstrap();
`;

    const mainPath = path.join(__dirname, 'apps', s, 'src', 'main.ts');
    fs.writeFileSync(mainPath, mainTs);
    console.log('Fixed', mainPath);
});
