import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';

const mockVideos = [
  {
    title: 'Mock Video 1',
    thumbnail: 'mock_thumbnail_url_1',
    url: 'https://mock_video_url_1',
  },
  {
    title: 'Mock Video 2',
    thumbnail: 'mock_thumbnail_url_2',
    url: 'https://mock_video_url_2',
  },
];

const serviceMock = {
  findAll: jest.fn().mockResolvedValue(mockVideos),
  getFavorites: jest.fn().mockReturnValue(mockVideos),
  addFavorite: jest.fn().mockReturnValue(mockVideos[0]),
  removeFavorite: jest.fn().mockReturnValue(mockVideos[0]),
};

const mockPrismaService = {
  videoFavorite: {
    findMany: jest.fn().mockResolvedValue(mockVideos),
    create: jest.fn().mockResolvedValue(mockVideos[0]),
    delete: jest.fn().mockResolvedValue(mockVideos[0]),
  },
};

describe('VideosController', () => {
  let controller: VideosController;
  let service: VideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideosController],
      providers: [
        { provide: VideosService, useValue: serviceMock },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    controller = module.get<VideosController>(VideosController);
    service = module.get<VideosService>(VideosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of videos', async () => {
      const mockVideos = [
        {
          title: 'Mock Video 1',
          thumbnail: 'mock_thumbnail_url_1',
          url: 'https://mock_video_url_1',
        },
        {
          title: 'Mock Video 2',
          thumbnail: 'mock_thumbnail_url_2',
          url: 'https://mock_video_url_2',
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(() => mockVideos);

      expect(await controller.findAll()).toBe(mockVideos);
    });
  });
});
