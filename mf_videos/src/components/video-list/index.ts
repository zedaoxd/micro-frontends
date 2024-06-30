import { Video as VideoComponent } from "../video";
import videoListTemplate from "./template.html";
import { VideoForm } from "../video-form";
import "./style.scss";

type Props = {
  videos: Video.SimpleModel[];
  showForm?: boolean;
};

export async function VideoList({ videos, showForm }: Props) {
  const videoPromises = videos.map((video) => VideoComponent(video));

  const videosMapped = await Promise.all(videoPromises);

  const videoListHtml = videosMapped.join("");

  return videoListTemplate
    .replace(/{{ video-list }}/g, videoListHtml)
    .replace(/{{ video-form }}/g, showForm ? VideoForm() : "");
}
