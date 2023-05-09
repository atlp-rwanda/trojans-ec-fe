import { categories } from "./categories.mock";
export const products = [
  {
    id: 2,
    name: "nike airforce",
    price: "2500",
    quantity: 20,
    available: true,
    categoryId: 1,
    sellerId: 7,
    bonus: 0,
    images: [
      "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491920/TrojansEcommerce/pqlvnsvkskzx4zo1trpb.jpg",
      "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491927/TrojansEcommerce/usun3ke7wyjeoqmoi2fa.jpg",
      "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491943/TrojansEcommerce/tcc47q8zbqhpqnt3k37e.jpg",
      "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491948/TrojansEcommerce/d61xpner8co9uommuoy6.jpg",
    ],
    expiryDate: "01/01/2027",
    expired: true,
    createdAt: "26/03/2023",
    updatedAt: "26/03/2023",
  },
];
export const product = {
  message: {},
  isLoading: false,
  error: false,
};
export const productState = {
  products: products,
  loading: false,
  error: { payload: null, status: false },
  selectedProduct: products[0],
  categories: categories,
  response: true,
};

export const updatedProduct = {
  id: 2,
  name: "Snikers",
  price: "27",
  quantity: 79,
  available: true,
  categoryId: 1,
  sellerId: 7,
  bonus: 2,
  images: [
    "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491920/TrojansEcommerce/pqlvnsvkskzx4zo1trpb.jpg",
    "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491927/TrojansEcommerce/usun3ke7wyjeoqmoi2fa.jpg",
    "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491943/TrojansEcommerce/tcc47q8zbqhpqnt3k37e.jpg",
    "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491948/TrojansEcommerce/d61xpner8co9uommuoy6.jpg",
  ],
  expiryDate: new Date("2026-12-31"),
  expired: true,
  createdAt: "26/03/2023",
  updatedAt: "26/03/2023",
};
