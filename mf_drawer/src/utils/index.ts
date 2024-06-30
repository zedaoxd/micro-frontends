import { countFavorites } from "../service/videos";

export function navigateTo(href: string, link: HTMLAnchorElement) {
  if (history.pushState) history.pushState(null, null, href);
  else window.location.href = href;

  window.dispatchEvent(
    new CustomEvent("change-url", { detail: { url: href } })
  );
  changeActiveLink(link);
}

export async function updateFavoritesCount(link: HTMLAnchorElement) {
  const favoritesCount = await countFavorites();
  console.log(favoritesCount);
  const span = link.querySelector("span");
  if (span) {
    span.textContent = favoritesCount.toString();
  }
}

function changeActiveLink(link: HTMLAnchorElement) {
  const links = document.querySelectorAll('a[id$="-link"]');

  links.forEach((link) => {
    link.classList.remove("active");
  });

  link.classList.add("active");
}
