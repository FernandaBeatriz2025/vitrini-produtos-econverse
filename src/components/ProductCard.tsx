import { Product } from "../types/Product";

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>

      <p className="description">{product.descriptionShort}</p>

      <strong>
        R$ {product.price.toLocaleString("pt-BR")}
      </strong>

      <button className="buy-button">Comprar</button>
    </div>
  );
}
