import videoModalTemplate from "./template.html";
import "./style.scss";

type Props = {
  videoId: string;
};

export function VideoModal({ videoId }: Props) {
  return videoModalTemplate.replace(/{{ video-id }}/g, videoId);
}
