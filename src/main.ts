import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BigIntInterceptor } from './interceptor/big-int.interceptor';
import { GlobalExceptionFilter } from './exception/filter/global-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    app.useGlobalInterceptors(new BigIntInterceptor());

    // custom validator 테스트를 위해 주석처리
    //app.useGlobalFilters(new GlobalExceptionFilter())
    //app.useGlobalFilters(app.get(GlobalExceptionFilter));

    const configService = app.get(ConfigService);

    // HTTP 서버 설정
    const server = app.getHttpServer();
    server.keepAliveTimeout = 1000 * 60;
    server.headersTimeout = 1000 * 61; // keepAliveTimeout 보다 큰 값이여야 함

    // 애플리케이션 시작
    await app.listen(configService.get<string>('config-info.port'));
}
bootstrap();
