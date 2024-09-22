import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientFirst } from '../../prisma/generated/first';

@Injectable()
export class Prisma1Service extends PrismaClientFirst implements OnModuleInit {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL1
                }
            },
            log: ['query', 'info', 'warn', 'error']
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async runInTransaction(callback: (prisma: PrismaClientFirst) => Promise<any>) {
        return await this.$transaction(callback);
    }
}
