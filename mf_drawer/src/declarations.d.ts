declare module "*.html" {
  const value: string;
  export default value;
}

declare type LinkProps = {
  href: string;
  text: string;
  name: string;
  extra?: string | number;
};

declare interface ChangeUrlEvent extends CustomEvent {
  detail: {
    href: string;
  };
}
