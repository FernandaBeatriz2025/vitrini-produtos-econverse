import { useState } from "react";
import productsData from "./data/products.json";
import { Product } from "./types/Product";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import "./styles/main.scss";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="container">
      <div className="banner">
        <div className="banner-content">
          <h2>Ofertas imperdíveis</h2>
          <p>Os melhores preços em tecnologia</p>
        </div>
      </div>

      <ProductList
        products={productsData.products}
        onSelectProduct={setSelectedProduct}
      />

<section className="benefits">
  <div className="benefit-item">🚚 Entrega rápida para todo o Brasil</div>
  <div className="benefit-item">🔒 Pagamento 100% seguro</div>
  <div className="benefit-item">💳 Parcelamento facilitado</div>
</section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;






