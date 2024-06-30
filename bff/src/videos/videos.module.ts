import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [VideosController],
  providers: [VideosService],
  imports: [HttpModule],
})
export class VideosModule {}
