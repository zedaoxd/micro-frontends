import "./style.scss";
import linkTemplate from "./template.html";

type Props = {
  href: string;
  text: string;
  name: string;
  extra?: string | number;
};

export function Link({ href, text, extra, name }: Props) {
  let template = linkTemplate;

  const url = window.location.pathname;
  const isActive = url === href ? "active" : "";

  const extraText = extra !== undefined ? `<span>${extra}</span>` : "";

  template = template
    .replace(/{{ href }}/g, href)
    .replace(/{{ text }}/g, text)
    .replace(/{{ extra }}/g, extraText)
    .replace(/{{ name }}/g, name)
    .replace(/{{ isActive }}/g, isActive);

  return template;
}
