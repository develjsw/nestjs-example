import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
    async createUser(name: string): Promise<number> {
        // 유저 생성 로직 작성..
        console.log(`User ${name} created`);
        // 1번 유저가 생성되었다고 가정
        return Promise.resolve(1);
    }
}
