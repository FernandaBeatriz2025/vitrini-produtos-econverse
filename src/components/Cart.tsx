import { CartItem } from "../types/CartItem";

interface Props {
  items: CartItem[];
}

export default function Cart({ items }: Props) {
  if (items.length === 0) {
    return <p className="cart-empty">Carrinho vazio</p>;
  }

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrinho</h2>

      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.product.productName}</span>
          <span>Qtd: {item.quantity}</span>
          <span>
            R$ {(item.product.price * item.quantity).toLocaleString("pt-BR")}
          </span>
        </div>
      ))}

      <hr />

      <strong>Total: R$ {total.toLocaleString("pt-BR")}</strong>
    </div>
  );
}
