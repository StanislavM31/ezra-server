import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from './update-item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt')) // Раскомментируйте, если используете JWT
  create(@Request() req, @Body() createItemDto: CreateItemDto) {
    const userId = req.user?.id || 1; // Для теста userId=1, в реальном проекте берётся из токена
    return this.itemService.create({ ...createItemDto, userId });
  }

  @Get()
  findAll() {
    // return this.itemService.findAll();
    return 'findAll';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.itemService.findOne(Number(id));
    return 'findOne';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    // return this.itemService.update(Number(id), updateItemDto);
    return 'update';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // this.itemService.remove(Number(id));
    // return { message: 'Item deleted' };
    return 'remove';
  }
}
