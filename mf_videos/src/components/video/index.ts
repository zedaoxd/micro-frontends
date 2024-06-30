import { isVideoFavorite } from "../../service/youtube";
import { starEmpty, starFill } from "../../constants";
import videoTemplate from "./template.html";
import { VideoModal } from "../video-modal";
import "./style.scss";

export async function Video({ videoId, thumbnail, title }: Video.SimpleModel) {
  const isFavorite = await isVideoFavorite(videoId);

  const pathImageFavorite = isFavorite ? starFill : starEmpty;

  return videoTemplate
    .replace(/{{ thumbnail }}/g, thumbnail)
    .replace(/{{ title }}/g, title)
    .replace(/{{ id }}/g, videoId)
    .replace(/{{ iconFavorite }}/g, pathImageFavorite)
    .replace(/{{ modal-wtach-video }}/g, VideoModal({ videoId }));
}
