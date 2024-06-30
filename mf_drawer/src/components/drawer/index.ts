import { countFavorites } from "../../service/videos";
import { Link } from "../link";
import "./style.scss";
import drawerTemplate from "./template.html";

type LinkType = LinkProps & { templateRef: string };

export async function Drawer() {
  let template = drawerTemplate;

  const favoritesCount = await countFavorites();

  const links: LinkType[] = [
    {
      href: "/",
      text: "Videos",
      name: "home",
      templateRef: "{{ videos-link }}",
    },
    {
      href: "/favoritos",
      text: "Favoritos",
      name: "favoritos",
      templateRef: "{{ favoritos-link }}",
      extra: favoritesCount,
    },
  ];

  links.forEach((link) => {
    template = template.replace(link.templateRef, Link(link));
  });

  return template;
}
