let t = $state(0);

export const getT = () => t;
export const setT = (_t: number) => { t = _t; };