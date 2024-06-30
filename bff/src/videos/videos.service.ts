import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  async getFavorites(): Promise<Videos.Response[]> {
    const videos = await this.prisma.videoFavorite.findMany();

    return videos.map((video) => ({
      title: video.title,
      thumbnail: video.thumbnail,
      url: video.url,
      videoId: video.id,
    }));
  }

  findAll(serach?: string): Observable<Videos.Response[]> {
    const route = 'https://www.googleapis.com/youtube/v3/search';
    const params = new URLSearchParams({
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      q: serach,
      type: 'video',
      maxResults: '10',
    });

    const response: Observable<AxiosResponse<Youtube.Response>> =
      this.httpService.get(route, { params });

    return response.pipe(
      map((response) => response.data.items),
      map((items) =>
        items.map((item) => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoId: item.id.videoId,
        })),
      ),
    );
  }

  countFavorites() {
    return this.prisma.videoFavorite.count();
  }

  async toogleFavoriteVideo(id: string) {
    const isFavorite = await this.isVideoFavorite(id);

    if (isFavorite) {
      await this.removeFavorite(id);
    } else {
      await this.addFavorite(id);
    }

    return !isFavorite;
  }

  async getOneFromYouTube(id: string) {
    const route = 'https://www.googleapis.com/youtube/v3/videos';
    const params = new URLSearchParams({
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      id,
    });

    const response: Youtube.SimpleResponse = await fetch(
      `${route}?${params.toString()}`,
    ).then((res) => res.json());

    const video = response.items[0];

    return {
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      videoId: video.id,
    };
  }

  async addFavorite(id: string) {
    const video = await this.getOneFromYouTube(id);

    return this.prisma.videoFavorite.create({
      data: {
        id: video.videoId,
        title: video.title,
        thumbnail: video.thumbnail,
        url: video.url,
      },
    });
  }

  async isVideoFavorite(id: string) {
    const video = await this.prisma.videoFavorite.findUnique({
      where: {
        id,
      },
    });

    return Boolean(video);
  }

  removeFavorite(id: string) {
    return this.prisma.videoFavorite.delete({
      where: {
        id,
      },
    });
  }
}
