import { Injectable } from '@nestjs/common';

export interface GoodDeed {
    deed: string;
    author: string;
    comments: string;
}

@Injectable()
export class DeedsService {
    getAllMyGoodDeeds(user:string): GoodDeed[] {
        return goodDeeds.filter(deed=>deed.author === user);
    }
    getAllDeeds(): GoodDeed[] {
        return goodDeeds;
    }
}

const goodDeeds: GoodDeed[] = [
    {
        deed: "Помог соседу с ремонтом",
        author: "Alex",
        comments: "Это было непросто, но он был очень благодарен!"
    },
    {
        deed: "Подарил книги в местную библиотеку",
        author: "Ann",
        comments: "Надеюсь, они пригодятся детям!"
    },
    {
        deed: "Участвовал в уборке парка",
        author: "Alex",
        comments: "Отлично провели время с друзьями и сделали парк чище!"
    },
    {
        deed: "Собрал деньги на благотворительность",
        author: "Ann",
        comments: "Каждая копейка имеет значение!"
    },
    {
        deed: "Выгулял собаку соседей",
        author: "Alex",
        comments: "Собака была счастлива, а соседи - благодарны!"
    }
];
