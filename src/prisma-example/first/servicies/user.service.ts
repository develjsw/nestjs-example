import { Injectable } from '@nestjs/common';
import { Prisma1Service } from '../../../prisma/prisma1.service';
//import { User, Prisma } from '@prisma/client';
import { User, Prisma } from '../../../../prisma/generated/first';

@Injectable()
export class UserService {
    constructor(private prisma: Prisma1Service) {}

    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }

    async updateUser(params: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where
        });
    }

    async createUserWithPost(userData: Prisma.UserCreateInput, postData: Prisma.PostCreateInput): Promise<any> {
        return this.prisma.runInTransaction(async (prisma) => {
            const user = await prisma.user.create({
                data: userData
            });

            const post = await prisma.post.create({
                data: {
                    ...postData,
                    author: {
                        connect: { id: user.id }
                    }
                }
            });

            return { user, post };
        });
    }
}
