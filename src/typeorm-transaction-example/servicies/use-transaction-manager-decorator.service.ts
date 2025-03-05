import { Injectable } from '@nestjs/common';

// typeorm v.0.3 이상부터 @TransactionRepository, @TransactionManager, @Transaction 데코레이터 완전 삭제됨 (https://typeorm.io/changelog#breaking-changes-1)
// NestJS 공식문서에서는 queryRunner, dataSource.transaction() 방식을 소개하고 있음
// [ dataSource.transaction() ] - 더 높은 추상화 수준으로 소스코드가 간결함, 다중 DB 트랜잭션 처리 불가능
// [ queryRunner ] - 소스코드가 김, 다중 DB 트랜잭션 처리 가능
    /*
        EX)

        @Injectable()
        export class MultiDBService {
          constructor(
            private readonly firstDataSource: DataSource,  // 첫 번째 DB
            private readonly secondDataSource: DataSource, // 두 번째 DB
          ) {}

          async createBoardWithLog(): Promise<void> {
            const queryRunner1: QueryRunner = this.firstDataSource.createQueryRunner();
            const queryRunner2: QueryRunner = this.secondDataSource.createQueryRunner();

            await queryRunner1.connect();
            await queryRunner2.connect();

            await queryRunner1.startTransaction();
            await queryRunner2.startTransaction();

            try {
              // 첫 번째 DB에서 게시판 생성
              await queryRunner1.manager.insert(BoardEntity, {
                boardName: '게시판 이름',
                createAt: new Date(),
              });

              // 두 번째 DB에서 로그 기록
              await queryRunner2.manager.insert(LogEntity, {
                message: '새로운 게시판이 생성됨',
                timestamp: new Date(),
              });

              // 모든 트랜잭션 성공 시 commit
              await queryRunner1.commitTransaction();
              await queryRunner2.commitTransaction();
            } catch (error) {
              console.error('Transaction failed:', error);

              // 하나라도 실패하면 rollback
              await queryRunner1.rollbackTransaction();
              await queryRunner2.rollbackTransaction();

              throw error;
            } finally {
              // 연결 반환
              await queryRunner1.release();
              await queryRunner2.release();
            }
          }
        }
    */

@Injectable()
export class UseTransactionManagerDecoratorService {
    constructor() {}

    async createBoard(): Promise<void> {}
}
