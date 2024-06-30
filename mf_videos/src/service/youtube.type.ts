export namespace YouTubeResponse {
  export type Response = {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: SearchResult[];
    snippet: Snippet;
    id: Id;
  };

  type PageInfo = {
    totalResults: number;
    resultsPerPage: number;
  };

  export type SearchResult = {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
  };

  type Id = {
    kind: string;
    channelId?: string;
    videoId?: string;
  };

  type Snippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };

  type Thumbnails = {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };

  type Thumbnail = {
    url: string;
    width?: number;
    height?: number;
  };
}
