import { starEmpty, starFill } from "../constants";
import { VideoList } from "../components/video-list";
import { toogleFavoriteVideo } from "./youtube";
// import { setupVideoModals } from "../events";

export async function toogleFavoriteVideoService(
  videoId: string,
  img: HTMLImageElement
) {
  const isFavorite = await toogleFavoriteVideo(videoId);

  img.src = isFavorite ? starFill : starEmpty;
}

export async function renderVideoList(
  videos: Video.SimpleModel[],
  showForm = false
) {
  const videoList = await VideoList({ videos, showForm });

  const rootElement = document.getElementById("mf-video-root");
  rootElement.innerHTML = videoList;

  // setupVideoModals();
}
