export const parseId = (url: string) => {
  const [, id] = /\/(.*)/.exec(url);
  return id;
};
