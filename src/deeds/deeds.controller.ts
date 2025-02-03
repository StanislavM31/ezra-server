import { Controller } from '@nestjs/common';
import { DeedsService } from './deeds.service';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {}
}
