import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './provider-example/provider.module';
import { GetterSetterModule } from './getter-setter-example/getter-setter.module';
import { MappingTableModule } from './mapping-dto-example/mapping-table.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnTypeModularityModule } from './return-type-modularity-example/return-type-modularity.module';
import { PrismaExampleModule } from './prisma-example/prisma-example.module';
import productionConfig from './config/production.config';
import developmentConfig from './config/development.config';
import localConfig from './config/local.config';
import { ConfigModule } from '@nestjs/config';

let config;
switch (process.env.NODE_ENV) {
    case 'production':
        config = productionConfig;
        break;
    case 'development':
        config = developmentConfig;
        break;
    default:
        config = localConfig;
        break;
}

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [config]
        }),
        ProviderModule,
        GetterSetterModule,
        MappingTableModule,
        ReturnTypeModularityModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'develjsw1993!@',
            database: 'test',
            entities: [__dirname + '/**/mysql/*.entity{.ts,.js}'],
            synchronize: false
        }),
        PrismaExampleModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
