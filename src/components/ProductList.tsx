import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function ProductList({ products, onSelectProduct }: Props) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onClick={() => onSelectProduct(product)}
        />
      ))}
    </div>
  );
}
