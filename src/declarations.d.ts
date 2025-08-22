// Картинки
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}
declare module "*.webp" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// Стили
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.sass" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}

// Шрифты
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";
declare module "*.otf";
