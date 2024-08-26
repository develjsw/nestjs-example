import { Module } from '@nestjs/common';
import { PrismaExampleController } from './prisma-example.controller';
import { PrismaExampleService } from './servicies/prisma-example.service';
import { PostService } from './servicies/post.service';
import { UserService } from './servicies/user.service';

@Module({
    controllers: [PrismaExampleController],
    providers: [PrismaExampleService, PostService, UserService]
})
export class PrismaExampleModule {}
