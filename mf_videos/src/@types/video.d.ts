declare namespace Video {
  export type SimpleModel = {
    title: string;
    thumbnail: string;
    url: string;
    videoId: string;
  };
}

declare type ChangeUrlEvent = CustomEvent<{ url: string }>;
