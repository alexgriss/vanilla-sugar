/// <reference types="vite/client" />

declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;

  export default src;
}

declare module "*.svg?react" {
  import React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare module "*.svg?url" {
  const src: string;

  export default src;
}
