import { onChangeRoute, registerFormSearchEvent } from "./events";
import setupClickHandlers from "./events/clickHandlers";
import { renderVideoList } from "./service/video";
import { getVideos } from "./service/youtube";

export default async function bootstrap() {
  await initialRender();

  registerFormSearchEvent();
  setupClickHandlers();
  onChangeRoute();
}

async function initialRender() {
  const videos = await getVideos();
  await renderVideoList(videos, true);
}

bootstrap();
