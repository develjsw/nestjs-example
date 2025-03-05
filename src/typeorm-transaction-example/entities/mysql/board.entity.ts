import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class BoardEntity {
    @PrimaryGeneratedColumn('increment', {
        name: 'board_id'
    })
    boardId: number;

    @Column({
        type: 'varchar',
        name: 'board_name'
    })
    boardName: string;

    @Column({
        type: 'datetime',
        name: 'create_at'
    })
    createAt: Date;

    @Column({
        type: 'datetime',
        name: 'update_at'
    })
    updateAt: Date;
}
