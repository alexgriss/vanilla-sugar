import { omit, pick } from "lodash";

import { sprinkles } from "./sprinkles.css";

const keys = Array.from(sprinkles.properties.keys());

export const extractSprinklesProps = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];
