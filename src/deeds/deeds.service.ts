import { Injectable } from '@nestjs/common';
import { GoodDeedDto } from 'src/dto/deed.dto';

export interface GoodDeed {
    deed: string;
    author: string;
    comments: string;
    done: boolean;
}

@Injectable()
export class DeedsService {
    getAllDeedsByUser(user:string): GoodDeed[] {
        return this.goodDeeds.filter(deed=>deed.author === user);
    }
    getAllDeeds(): GoodDeed[] {
        return this.goodDeeds;
    }
    createDeedInAll(dto: GoodDeedDto){
        this.goodDeeds.push({
            deed: dto.deed,
            author: dto.author,
            comments: dto.comments,
            done: false
        })
    }

    private goodDeeds: GoodDeed[] = [
        {
            deed: "Помог соседу с ремонтом",
            author: "Alex",
            comments: "Это было непросто, но он был очень благодарен!",
            done: false
        },
        {
            deed: "Подарил книги в местную библиотеку",
            author: "Ann",
            comments: "Надеюсь, они пригодятся детям!",
            done: false
        },
        {
            deed: "Участвовал в уборке парка",
            author: "Alex",
            comments: "Отлично провели время с друзьями и сделали парк чище!",
            done: false
        },
        {
            deed: "Собрал деньги на благотворительность",
            author: "Ann",
            comments: "Каждая копейка имеет значение!",
            done: false
        },
        {
            deed: "Выгулял собаку соседей",
            author: "Alex",
            comments: "Собака была счастлива, а соседи - благодарны!",
            done: false
        }
    ];
}


