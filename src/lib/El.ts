import { matrix } from "./Matrix";
import { state } from "./State";

export const el = (): App.El => {
  return {
    z: 0,
    lifetime: 0,
    initial: state(),
    // matrix: matrix([]),
    tweens: [],
  }
};