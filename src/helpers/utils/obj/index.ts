export const matchKeys = (
  objectToSearch: object,
  keysToFind: string[]
): boolean => {
  let counter: number = 0;

  Object.keys(objectToSearch).forEach((key) => {
    if (keysToFind.includes(key)) counter++;
  });

  return keysToFind.length === counter ? true : false;
};
