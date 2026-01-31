# Vitrine de Produtos - Teste Front-End  Econverse

Este projeto é uma vitrine de produtos desenvolvida em **React + TypeScript**, seguindo o layout do **Figma da Econverse**.  
O projeto exibe produtos, banner de promoções, modal com detalhes e informações de benefícios para o cliente.

---

## Tecnologias utilizadas

- React
- TypeScript
- SCSS
- JSON (para produtos)
- Flexbox (layout responsivo)
- Mobile-first

---

## Funcionalidades

- Header com a marca **Econverse**  
- Banner de ofertas com imagem via URL  
- Benefícios centralizados na tela  
- Vitrine de produtos com cards:  
  - Imagem do produto  
  - Nome  
  - Descrição curta (limite de linhas)  
  - Preço  
  - Botão **Comprar**  
- Modal mostrando detalhes completos do produto  
- Layout responsivo, adaptado para mobile  

---

## Estrutura de pastas
vitrine-produtos-novo/
├─ src/
│ ├─ components/
│ │ ├─ ProductCard.tsx
│ │ ├─ ProductList.tsx
│ │ └─ ProductModal.tsx
│ ├─ data/
│ │ └─ products.json
│ ├─ styles/
│ │ └─ main.scss
│ ├─ types/
│ │ └─ Product.ts
│ └─ App.tsx
├─ package.json
└─ tsconfig.json

---

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
npm start
O projeto abrirá no navegador: http://localhost:3000

Para dúvidas ou feedback: fernanda.spoby@gmail.com