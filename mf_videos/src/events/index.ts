import { renderVideoList } from "../service/video";
import { getFavoritesVideos, getVideos } from "../service/youtube";

export function registerFormSearchEvent() {
  const form = document.getElementById("video-form") as HTMLFormElement;

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formInput = form.querySelector("input") as HTMLInputElement;
    const searchQuery = formInput.value;

    const videos = await getVideos(searchQuery);
    await renderVideoList(videos, true);
  });
}

export async function onChangeRoute() {
  window.addEventListener("change-url", async (event: ChangeUrlEvent) => {
    const { url } = event.detail;

    switch (url) {
      case "/":
        await renderVideoList(await getVideos(), true);
        break;
      case "/favoritos":
        await renderVideoList(await getFavoritesVideos(), false);
        break;
      default:
        await renderVideoList(await getVideos(), true);
        break;
    }
  });
}
