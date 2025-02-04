import { Controller, Get, Param } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { GoodDeed } from './deeds.service';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {}
  @Get()
  getAll():GoodDeed[] {
    return this.deedsService.getAllDeeds();
  }
  @Get(':id')
  getAllMyGoodDeeds(@Param('id') id: string): any {
    return this.deedsService.getAllMyGoodDeeds(id);
  }
}

