import { matrix } from "./Matrix";
import { state } from "./State";

export const el = (): App.El => {
  return {
    z: 0,
    initial: state(),
    // matrix: matrix([]),
    keyframes: [],
  }
};