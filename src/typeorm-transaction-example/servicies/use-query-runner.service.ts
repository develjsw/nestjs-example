import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { BoardEntity } from '../entities/mysql/board.entity';
import { BoardFileEntity } from '../entities/mysql/board-file.entity';

// 직관적 비교를 위해 Repository Layer 미사용

@Injectable()
export class UseQueryRunnerService {
    constructor(private readonly dataSource: DataSource) {}

    // [O] - 올바른 사용법 - 1 (추천)
    async createBoard(): Promise<void> {
        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const boardRepository: Repository<BoardEntity> = queryRunner.manager.getRepository(BoardEntity);
            await boardRepository.insert({
                boardName: '게시판 이름',
                createAt: new Date()
            });

            throw new InternalServerErrorException('강제로 에러 발생시키기');

            const boardFileRepository: Repository<BoardFileEntity> = queryRunner.manager.getRepository(BoardFileEntity);
            await boardFileRepository.insert({
                fileName: '파일명',
                fileUrl: 'URL 주소',
                createAt: new Date()
            });

            await queryRunner.commitTransaction();
        } catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            throw new InternalServerErrorException(error);
        } finally {
            // connection pool 반환
            await queryRunner.release();
        }
    }

    // [O] - 올바른 사용법 - 2
    // async createBoard(): Promise<void> {
    //     const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();
    //
    //     try {
    //         await queryRunner.manager.insert(BoardEntity, {
    //             boardName: '게시판 이름',
    //             createAt: new Date()
    //         });
    //
    //         throw new InternalServerErrorException('강제로 에러 발생시키기');
    //
    //         await queryRunner.manager.insert(BoardFileEntity, {
    //             fileName: '파일명',
    //             fileUrl: 'URL 주소',
    //             createAt: new Date()
    //         });
    //
    //         await queryRunner.commitTransaction();
    //     } catch (error) {
    //         console.log(error);
    //         await queryRunner.rollbackTransaction();
    //         throw new InternalServerErrorException(error);
    //     } finally {
    //         // connection pool 반환
    //         await queryRunner.release();
    //     }
    // }
}
