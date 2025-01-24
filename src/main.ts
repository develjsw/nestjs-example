import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BigIntInterceptor } from './interceptor/big-int.interceptor';
import { GlobalExceptionFilter } from './exception/filter/global-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new BigIntInterceptor());

    //app.useGlobalFilters(new GlobalExceptionFilter())
    app.useGlobalFilters(app.get(GlobalExceptionFilter));

    const configService = app.get(ConfigService);

    await app.listen(configService.get<string>('config-info.port'));
}
bootstrap();
