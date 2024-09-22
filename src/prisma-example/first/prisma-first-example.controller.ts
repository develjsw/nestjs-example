import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './servicies/user.service';
import { PostService } from './servicies/post.service';
//import { User as UserModel, Post as PostModel } from '@prisma/client';
import { User as UserModel, Post as PostModel } from '../../../prisma/generated/first';

@Controller('prisma-first-example')
export class PrismaFirstExampleController {
    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService
    ) {}

    @Get('post/:id')
    async getPostById(@Param('id') id: string): Promise<PostModel> {
        return this.postService.post({ id: Number(id) });
    }

    @Get('feed')
    async getPublishedPosts(): Promise<PostModel[]> {
        return this.postService.posts({
            where: { published: true }
        });
    }

    @Get('filtered-posts/:searchString')
    async getFilteredPosts(@Param('searchString') searchString: string): Promise<PostModel[]> {
        return this.postService.posts({
            where: {
                OR: [
                    {
                        title: { contains: searchString }
                    },
                    {
                        content: { contains: searchString }
                    }
                ]
            }
        });
    }

    @Post('post')
    async createDraft(@Body() postData: { title: string; content?: string; authorEmail: string }): Promise<PostModel> {
        const { title, content, authorEmail } = postData;
        return this.postService.createPost({
            title,
            content,
            author: {
                connect: { email: authorEmail }
            }
        });
    }

    @Post('user')
    async signupUser(@Body() userData: { name?: string; email: string }): Promise<UserModel> {
        return this.userService.createUser(userData);
    }

    @Put('publish/:id')
    async publishPost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: { published: true }
        });
    }

    @Delete('post/:id')
    async deletePost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.deletePost({ id: Number(id) });
    }

    @Post('user-with-post')
    async createUserWithPost(
        @Body() data: { name: string; email: string; title: string; content?: string }
    ): Promise<any> {
        const { name, email, title, content } = data;
        return this.userService.createUserWithPost({ name, email }, { title, content, published: true });
    }
}
