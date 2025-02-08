import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { GoodDeed } from './deeds.service';
import { GoodDeedDto } from 'src/dto/deed.dto';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {}
  @Get()
  getAll():GoodDeed[] {
    return this.deedsService.getAllDeeds();
  }
  @Get(':id')
  getAllMyGoodDeeds(@Param('id') id: string): any {
    return this.deedsService.getAllDeedsByUser(id);
  }
  @Post('deeds')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: GoodDeedDto){
    return this.deedsService.createDeedInAll(dto)
  }

  @Patch(':id')
  makeDeedDone(@Param('id') id: number) {
    return this.deedsService.makeDeedIsDone(id)
  }

}

