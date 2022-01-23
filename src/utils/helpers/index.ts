export const getRandomCell = (): number => Math.round(Math.random());

export const createArray = (arraySize: number) => Array.from(Array(arraySize));
export const createMatrix = (rows: number, cols: number): number[][] =>
  createArray(cols).map(() => createArray(rows).map(getRandomCell));

export const findByTestAttr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};