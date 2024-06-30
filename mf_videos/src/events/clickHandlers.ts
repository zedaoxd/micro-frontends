import { renderVideoList, toogleFavoriteVideoService } from "../service/video";
import { getFavoritesVideos } from "../service/youtube";

let clickEventHandler: (event: Event) => void;

export default function setupClickHandlers() {
  clickEventHandler = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.target instanceof HTMLImageElement) {
      const videoId = event.target.getAttribute("data-video-favorite-id");
      if (videoId) {
        await handleFavoriteToggle(videoId, event.target);
      }
    }

    if (event.target instanceof HTMLImageElement) {
      const classList = event.target.classList;

      if (classList.contains("card-video__img")) {
        const parent = event.target.parentElement;
        const videoId = parent.getAttribute("data-card-video-id");

        if (videoId) {
          const modalContainer: HTMLElement = document.querySelector(
            `[data-modal-watch-video-container="${videoId}"]`
          );
          handleVideoModal(modalContainer, videoId);
        }
      }
    }
  };

  document.removeEventListener("click", clickEventHandler);
  document.addEventListener("click", clickEventHandler);
}

async function handleFavoriteToggle(videoId: string, img: HTMLImageElement) {
  await toogleFavoriteVideoService(videoId, img);

  const url = window.location.pathname;
  if (url === "/favoritos") {
    await renderVideoList(await getFavoritesVideos(), false);
  }

  window.dispatchEvent(new CustomEvent("favorite-count-change"));
}

function handleVideoModal(modalContainer: HTMLElement, videoId: string) {
  const dialog = modalContainer.querySelector("dialog");
  const buttonClose = dialog.querySelector(".close");
  dialog.showModal();

  const playerContainer: HTMLDivElement =
    dialog.querySelector(".player-container");

  const player = createYouTubePlayer(playerContainer, videoId);

  buttonClose.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal(dialog, player);
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(dialog, player);
    }
  });
}

function closeModal(dialog: HTMLDialogElement, player: YouTubePlayer) {
  dialog.close();
  player.stopVideo();
  player.clearVideo();
}

function createYouTubePlayer(
  container: HTMLElement,
  videoId: string
): YouTubePlayer {
  return new YT.Player(container, {
    videoId: videoId,
    height: "100%",
    width: "100%",
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
    },
  });
}
