export type Item = {
  id: string;
  title: string;
  description: string;
};

export const fetchItems = (): Promise<Item[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data: Item[] = Array.from({ length: 10 }).map((_, index) => ({
        id: String(index + 1),
        title: `Item ${index + 1}`,
        description: `Descripcion del item ${index + 1}`,
      }));

      resolve(data);
    }, 2000);
  });
};
