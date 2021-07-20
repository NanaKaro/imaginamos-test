export interface IProducts {
  id: number,
  name: string,
  qualification: number,
  time: string,
  price: number,
  image: string,
  categoryId: number;
}

interface IGetProducts {
  (): Promise<IProducts[]>
}

export const getProducts: IGetProducts = async () => {
  const response = await fetch('/data/products.json');
  const products = await response.json();
  return products;
}


