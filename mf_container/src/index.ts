import { App } from "./app";

import "./index.scss";

async function bootstrap() {
  const app = await App();
  const rootElement = document.getElementById("bff-root");
  rootElement.innerHTML = app;
}

bootstrap();
