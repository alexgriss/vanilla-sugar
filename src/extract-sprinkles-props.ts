import { sprinkles } from "./sprinkles.css";
import { omit, pick } from "./utils/object";

const keys = Array.from(sprinkles.properties.keys()) as string[];

export const extractSprinklesProps = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];
