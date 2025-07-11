import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from './update-item.dto';

@Injectable()
export class ItemService {
  private items: Item[] = [];
  private idCounter = 1;

  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: this.idCounter++,
      ...createItemDto,
    };
    this.items.push(item);
    return item;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto): Item {
    const item = this.findOne(id);
    Object.assign(item, updateItemDto);
    return item;
  }

  remove(id: number): void {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) throw new NotFoundException('Item not found');
    this.items.splice(index, 1);
  }
}
