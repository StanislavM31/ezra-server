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
    try {
      return this.deedsService.createDeedInAll(dto)
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  makeDeedDone(@Param('id') id: number) {
    try {
      return this.deedsService.makeDeedIsDone(id)
    } catch (error) {
      return (error as Error).message;
    }
  }

}

