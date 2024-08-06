import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderExampleModule } from './provider-example/provider-example.module';

@Module({
    imports: [ProviderExampleModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
