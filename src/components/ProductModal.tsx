import { Product } from "../types/Product";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>

        <img src={product.photo} alt={product.productName} />

        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>

        <strong>
          R$ {product.price.toLocaleString("pt-BR")}
        </strong>
      </div>
    </div>
  );
}
