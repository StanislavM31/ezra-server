import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deed } from './schemas/deed.schema';
import { CreateDeedDto } from './dto/create-deed.dto';

@Injectable()
export class DeedsService {
  constructor(
    @InjectModel(Deed.name) private deedModel: Model<Deed>,
  ) {}

  async create(dto: CreateDeedDto & { owner: string }) {
    const createdDeed = new this.deedModel(dto);
    return createdDeed.save();
    //попробовать переделать на DeedResponseDto
  }

  async findByOwner(owner: string) {
    return this.deedModel.find({ owner }).exec();
  }

  async findById(id: string) {
    return this.deedModel.findById(id).exec();
  }

  async remove(id: string, owner: string) {
    const deletedDeed = await this.deedModel.findOneAndDelete({ _id: id, owner }).exec();
    if (!deletedDeed) {
      throw new NotFoundException('Deed not found or not authorized');
    }
    return deletedDeed;
  }
}
