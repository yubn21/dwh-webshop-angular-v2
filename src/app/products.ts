export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img:string;
}

export const products = [
  {
    id: 1,
    name: 'Purple Backpack',
    price: 199,
    description: 'A nice, purple backpack with SimCorp Logo',
    img: 'assets/img/backpack-purple.jpg'
  },
  {
    id: 2,
    name: 'Shopping Bike',
    price: 760,
    description: 'A colorful shopping bike with SimCorp Logo',
    img: 'assets/img/bike.png'
  },
  {
    id: 3,
    name: 'Christmas Mug',
    price: 28,
    description: 'A Christmas mug with SimCorp Logo',
    img: 'assets/img/mug.jpg'
  },
  {
    id: 4,
    name: 'Long Umbrella',
    price: 45,
    description: 'A blue, long umbrella with SimCorp Logo',
    img: 'assets/img/umbrella.jfif'
  }
];
