export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  price: number;
  created_at: string;
}

export const products: Product[] = [
  {
    id: "uuid",
    name: "produto 1",
    description: "descrição produto 1",
    price: 50.0,
    image_url: "https://source.unsplash.com/random?product" + Math.random(),
    slug: "produto-01",
    created_at: "2021-06-06T00:00:00",
  },
  {
    id: "uuid2",
    name: "produto 2",
    description: "produto 2 descrição",
    price: 50.0,
    image_url: "https://source.unsplash.com/random?product" + Math.random(),
    slug: "produto-02",
    created_at: "2021-06-07T00:00:00",
  },
];
