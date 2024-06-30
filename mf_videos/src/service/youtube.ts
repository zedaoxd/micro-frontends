import type { YouTubeResponse } from "./youtube.type";

export async function getVideos(
  search: string = ""
): Promise<Video.SimpleModel[]> {
  const route = "http://localhost:4000/api/videos";
  const params = new URLSearchParams({
    search,
  });

  const response = await fetch(`${route}?${params.toString()}`);

  return response.json();
}

export async function getFavoritesVideos(): Promise<Video.SimpleModel[]> {
  const route = "http://localhost:4000/api/videos/favorites";
  const response = await fetch(route);

  return response.json();
}

export async function isVideoFavorite(videoId: string): Promise<boolean> {
  const route = `http://localhost:4000/api/videos/favorites/${videoId}`;
  const response = await fetch(route);

  return response.json();
}

export async function toogleFavoriteVideo(videoId: string): Promise<boolean> {
  const route = `http://localhost:4000/api/videos/favorites/${videoId}`;
  const response = await fetch(route, {
    method: "POST",
  });

  return response.json();
}

export async function getVideosById(
  ids: string[]
): Promise<YouTubeResponse.SearchResult[]> {
  const route = "https://www.googleapis.com/youtube/v3/videos";
  const params = new URLSearchParams({
    key: process.env.YOUTUBE_API_KEY,
    part: "snippet",
    id: ids.join(","),
  });

  const response = await fetch(`${route}?${params}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar vídeo do YouTube");
  }

  const json = await response.json();

  return json.items[0];
}
