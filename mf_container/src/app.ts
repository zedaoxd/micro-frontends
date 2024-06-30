import "./app.scss";
import appTemplate from "./app.html";

export async function App() {
  let template = appTemplate;

  import("MfVideosApp/MfVideos");
  import("MfDrawerApp/MfDrawer");

  return template;
}
