declare module "*.html" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

// Definição das interfaces para a API do YouTube

// Opções disponíveis para configurar um player do YouTube
interface YouTubePlayerOptions {
  width?: number | string;
  height?: number | string;
  videoId?: string;
  playerVars?: YouTubePlayerVars;
  events?: YouTubePlayerEvents;
}

// Variáveis do player do YouTube
interface YouTubePlayerVars {
  autoplay?: 0 | 1;
  cc_load_policy?: 1;
  color?: "red" | "white";
  controls?: 0 | 1 | 2;
  disablekb?: 0 | 1;
  enablejsapi?: 0 | 1;
  end?: number;
  fs?: 0 | 1;
  hl?: string;
  iv_load_policy?: 1 | 3;
  list?: string;
  listType?: "playlist" | "search" | "user_uploads";
  loop?: 0 | 1;
  modestbranding?: 0 | 1;
  origin?: string;
  playlist?: string;
  playsinline?: 0 | 1;
  rel?: 0 | 1;
  showinfo?: 0 | 1;
  start?: number;
  widget_referrer?: string;
}

// Eventos que podem ocorrer durante a reprodução do vídeo
interface YouTubePlayerEvents {
  onReady?: (event: YouTubePlayerEvent) => void;
  onStateChange?: (event: YouTubePlayerEvent) => void;
  onPlaybackQualityChange?: (event: YouTubePlayerEvent) => void;
  onPlaybackRateChange?: (event: YouTubePlayerEvent) => void;
  onError?: (event: YouTubePlayerError) => void;
}

// Evento genérico do player do YouTube
interface YouTubePlayerEvent {
  target: YouTubePlayer;
  data: any;
}

// Tipo de erro do player do YouTube
interface YouTubePlayerError {
  target: YouTubePlayer;
  data: number;
}

// Interface principal da API do YouTube
interface YouTubePlayer {
  Player: {
    new (
      containerId: HTMLElement | string,
      options: YouTubePlayerOptions
    ): YouTubePlayer;
  };
  PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
  PlayerOptions: YouTubePlayerOptions;
  PlayerVars: YouTubePlayerVars;
  PlayerEvents: YouTubePlayerEvents;
  PlayerEvent: YouTubePlayerEvent;
  PlayerError: YouTubePlayerError;
  destroy: () => void;
  playVideo: () => void;
  stopVideo: () => void;
  clearVideo: () => void;
}

// Declaração da variável global YT com a interface tipada
declare var YT: YouTubePlayer;
