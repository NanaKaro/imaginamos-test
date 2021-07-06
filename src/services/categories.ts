export interface ICategory {
  id: number;
  name: string;
  icon: string;
}

interface IGetCategories {
  (): Promise<ICategory[]>
}

export const getCategories: IGetCategories = async () => {
  const response = await fetch('/data/categories.json');
  const categories = await response.json();
  return categories;
}


