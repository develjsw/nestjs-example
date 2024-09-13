import { registerAs } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

const PRISMA_MYSQL_URL = path.resolve('./secret/production/prisma-mysql-url');

export default registerAs('config-info', () => ({
    port: parseInt(process.env.PORT, 10) || 6000,

    database: {
        prisma: {
            mysql: {
                url: fs.readFileSync(PRISMA_MYSQL_URL).toString()
            }
        }
    }
}));
