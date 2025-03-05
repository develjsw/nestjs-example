import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { BoardEntity } from '../entities/mysql/board.entity';
import { BoardFileEntity } from '../entities/mysql/board-file.entity';

// 직관적 비교를 위해 Repository Layer 미사용

@Injectable()
export class UseTransactionMethodService {
    constructor(private readonly dataSource: DataSource) {}

    // [X] - 잘못된 사용법
    // async createBoard(): Promise<void> {
    //     try {
    //         await this.dataSource.transaction(async (entityManager: EntityManager) => {
    //             await this.dataSource.manager.insert(BoardEntity, {
    //                 boardName: '게시판 이름',
    //                 createAt: new Date()
    //             });
    //
    //             throw new InternalServerErrorException('강제로 에러 발생시키기');
    //
    //             await this.dataSource.manager.insert(BoardFileEntity, {
    //                 fileName: '파일명',
    //                 fileUrl: 'URL 주소',
    //                 createAt: new Date()
    //             });
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         throw new InternalServerErrorException(error);
    //     }
    // }

    // [O] - 올바른 사용법 - 1 (추천)
    async createBoard(): Promise<void> {
        try {
            await this.dataSource.transaction(async (entityManager: EntityManager) => {
                const boardRepository: Repository<BoardEntity> = entityManager.getRepository(BoardEntity);
                await boardRepository.insert({
                    boardName: '게시판 이름',
                    createAt: new Date()
                });

                throw new InternalServerErrorException('강제로 에러 발생시키기');

                const boardFileRepository: Repository<BoardFileEntity> = entityManager.getRepository(BoardFileEntity);
                await boardFileRepository.insert({
                    fileName: '파일명',
                    fileUrl: 'URL 주소',
                    createAt: new Date()
                });
            });
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException(error);
        }
    }

    // [O] - 올바른 사용법 - 2
    // async createBoard(): Promise<void> {
    //     try {
    //         await this.dataSource.transaction(async (entityManager: EntityManager) => {
    //             await entityManager.insert(BoardEntity, {
    //                 boardName: '게시판 이름',
    //                 createAt: new Date()
    //             });
    //
    //             throw new InternalServerErrorException('강제로 에러 발생시키기');
    //
    //             await entityManager.insert(BoardFileEntity, {
    //                 fileName: '파일명',
    //                 fileUrl: 'URL 주소',
    //                 createAt: new Date()
    //             });
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         throw new InternalServerErrorException(error);
    //     }
    // }
}
