import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  findAll(@Query('search') search?: string) {
    return this.videosService.findAll(search);
  }

  @Get('favorites')
  getFavorites() {
    return this.videosService.getFavorites();
  }

  @Get('favorites/:id')
  isVideoFavorite(@Param('id') id: string) {
    return this.videosService.isVideoFavorite(id);
  }

  @Get('count')
  countFavorites() {
    return this.videosService.countFavorites();
  }

  @Post('favorites/:id')
  addFavorite(@Param('id') id: string) {
    return this.videosService.toogleFavoriteVideo(id);
  }

  @Delete(':id')
  removeFavorite(@Param('id') id: string) {
    return this.videosService.removeFavorite(id);
  }
}
