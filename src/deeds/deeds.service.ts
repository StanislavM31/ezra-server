import { Injectable } from '@nestjs/common';
import { GoodDeedDto } from 'src/dto/deed.dto';

export interface GoodDeed {
    id?: number;
    deed: string;
    author: string;
    comments?: string;
    isDone: boolean;
}

@Injectable()
export class DeedsService {
    getAllDeedsByUser(user: string): GoodDeed[] {
        return this.goodDeeds.filter(deed => deed.author === user);
    }
    getAllDeeds(): GoodDeed[] {
        return this.goodDeeds;
    }
    createDeedInAll(dto: GoodDeedDto) {
        const newId: number = this.goodDeeds.length +1 ;
        this.goodDeeds.push({
            id: newId ,
            deed: dto.deed,
            author: dto.author,
            comments: dto.comments,
            isDone: dto.isDone ?? false
        })
        return this.goodDeeds;
    }

    makeDeedIsDone(id: number) {
        const updatedDeed = this.goodDeeds.find((item) => item.id === +id)
        updatedDeed.isDone = !updatedDeed.isDone;
        return updatedDeed;
    }

    private goodDeeds: GoodDeed[] = [
        {
            id: 1,
            deed: "Помог соседу с ремонтом",
            author: "Alex",
            comments: "Это было непросто, но он был очень благодарен!",
            isDone: false
        },
        {
            id: 2,
            deed: "Подарил книги в местную библиотеку",
            author: "Ann",
            comments: "Надеюсь, они пригодятся детям!",
            isDone: false
        },
        {
            id: 3,
            deed: "Участвовал в уборке парка",
            author: "Alex",
            comments: "Отлично провели время с друзьями и сделали парк чище!",
            isDone: false
        },
        {
            id: 4,
            deed: "Собрал деньги на благотворительность",
            author: "Ann",
            comments: "Каждая копейка имеет значение!",
            isDone: false
        },
        {
            id: 5,
            deed: "Выгулял собаку соседей",
            author: "Alex",
            comments: "Собака была счастлива, а соседи - благодарны!",
            isDone: false
        }
    ];
}


