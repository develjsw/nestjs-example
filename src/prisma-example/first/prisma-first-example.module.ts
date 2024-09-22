import { Module } from '@nestjs/common';
import { PrismaFirstExampleController } from './prisma-first-example.controller';
import { Prisma1Service } from '../../prisma/prisma1.service';
import { PostService } from './servicies/post.service';
import { UserService } from './servicies/user.service';

@Module({
    controllers: [PrismaFirstExampleController],
    providers: [Prisma1Service, PostService, UserService]
})
export class PrismaFirstExampleModule {}
