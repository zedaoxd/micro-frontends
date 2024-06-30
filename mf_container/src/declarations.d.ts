declare module "*.html" {
  const value: string;
  export default value;
}

declare module "MfVideosApp/MfVideos" {
  const defaultExport: () => string;
  export default defaultExport;
}

declare module "MfDrawerApp/MfDrawer" {
  const defaultExport: () => string;
  export default defaultExport;
}
