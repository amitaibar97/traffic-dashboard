export const normalizeId = (id: string | string[]): string =>
  Array.isArray(id) ? id[0] : id;
