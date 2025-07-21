import { Controller, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createDeed(@Body() body: { title: string; description: string }) {
    const dummyUserId = 1;
    return this.deedsService.createDeed(body.title, body.description, dummyUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteDeed(@Param('id') id: string) {
    const dummyUserId = 1;
    return this.deedsService.deleteDeed(id, dummyUserId);
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deedsService.remove(id);
  }
}
