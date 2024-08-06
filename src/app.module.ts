import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './provider-example/provider.module';
import { GetterSetterModule } from './getter-setter-example/getter-setter.module';

@Module({
    imports: [ProviderModule, GetterSetterModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
