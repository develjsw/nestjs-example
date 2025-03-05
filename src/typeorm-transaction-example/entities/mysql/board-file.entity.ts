import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board_file')
export class BoardFileEntity {
    @PrimaryGeneratedColumn('increment', {
        name: 'board_file_id'
    })
    boardFileId: number;

    @Column({
        type: 'varchar',
        name: 'file_name'
    })
    fileName: string;

    @Column({
        type: 'varchar',
        name: 'file_url'
    })
    fileUrl: string;

    @Column({
        type: 'datetime',
        name: 'create_at'
    })
    createAt: Date;
}
