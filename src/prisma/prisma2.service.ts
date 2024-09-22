import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientSecond } from '../../prisma/generated/second';

@Injectable()
export class Prisma2Service extends PrismaClientSecond implements OnModuleInit {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL2
                }
            },
            log: ['query', 'info', 'warn', 'error']
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async runInTransaction(callback: (prisma: PrismaClientSecond) => Promise<any>) {
        return await this.$transaction(callback);
    }
}
