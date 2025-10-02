export const pick = <T extends object>(obj: T, keys: string[]): Partial<T> => {
  if (obj == null) return {};
  const result = {} as Partial<T>;
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      (result as any)[key] = (obj as any)[key];
    }
  }
  return result;
};

export const omit = <T extends object>(obj: T, keys: string[]): Partial<T> => {
  if (obj == null) return {};
  const result = { ...obj };
  for (const key of keys) {
    delete (result as any)[key];
  }
  return result;
};
