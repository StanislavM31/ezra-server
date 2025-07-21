import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deed } from './schemas/deed.schema';
import { CreateDeedDto } from './dto/create-deed.dto';

@Injectable()
export class DeedsService {
  constructor(
    @InjectModel(Deed.name) private deedModel: Model<Deed>,
  ) { }

  async create(dto: CreateDeedDto) {
    const createdDeed = new this.deedModel(dto);
    return createdDeed.save();
  }

  async findByOwner(owner: string) {
    return this.deedModel.find({ owner }).exec();
  }

  async findById(id: string) {
    return this.deedModel.findById(id).exec();
  }

  async remove(id: string) {
    const deletedDeed = await this.deedModel.findOneAndDelete({ _id: id }).exec();
    if (!deletedDeed) {
      throw new NotFoundException('Deed not found');
    }
    return deletedDeed;
  }

  private deeds: { id: number; title: string; description: string; ownerId: number }[] = [];

  createDeed(title: string, description: string, ownerId: number) {
    const deed = { id: Date.now(), title, description, ownerId };
    this.deeds.push(deed);
    return deed;
  }

  deleteDeed(id: string, ownerId: number) {
    const idx = this.deeds.findIndex(
      deed => deed.id === Number(id) && deed.ownerId === ownerId,
    );
    if (idx === -1) {
      return { message: 'Deed not found or not authorized' };
    }
    this.deeds.splice(idx, 1);
    return { message: 'Deed deleted' };
  }
}
