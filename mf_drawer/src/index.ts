import { Drawer } from "./components/drawer";
import { navigateTo, updateFavoritesCount } from "./utils";

let clickEventHandler: (event: Event) => void;

export default async function bootstrap() {
  const drawer = await Drawer();
  const rootElement = document.getElementById("mf-drawer-root");
  rootElement.innerHTML = drawer;

  if (clickEventHandler) {
    document.removeEventListener("click", clickEventHandler);
  }

  clickEventHandler = (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const drawerId = event.target.getAttribute("id");
      if (drawerId && drawerId.endsWith("-link")) {
        event.preventDefault();

        const href = event.target.getAttribute("href");
        navigateTo(href, event.target);
      }
    }
  };

  window.addEventListener("favorite-count-change", async () => {
    const fovoriteLink = document.getElementById("favoritos-link");
    await updateFavoritesCount(fovoriteLink as HTMLAnchorElement);
  });

  document.addEventListener("click", clickEventHandler);
}

bootstrap();
