import { Controller, Get, Post, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createDeed(@Body() body: { title: string; description: string }, @Req() req) {
    const owner = req.user.userId;
    return this.deedsService.create({
      title: body.title,
      description: body.description,
      owner
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteDeed(@Param('id') id: string, @Req() req) {
    const owner = req.user.userId;
    return this.deedsService.remove(id, owner);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async getDeeds(@Req() req) {
    const owner = req.user.userId;
    return this.deedsService.findByOwner(owner);
  }
}
