import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BigIntInterceptor } from './interceptor/big-int.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new BigIntInterceptor());

    const configService = app.get(ConfigService);

    await app.listen(configService.get<string>('config-info.port'));
}
bootstrap();
