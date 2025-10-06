import { useEffect, useState } from "react";
import Card from "./components/Card";
import ShoppingCart from "./components/ShoppingCart";
import OrderProvider from "./contexts/OrderContext";

const App = () => {

  const [produtos, setProdutos] = useState([]);

  function buscarProdutos(){
    fetch("https://fakestoreapi.com/products")
    .then(resposta => resposta.json())
    .then(json => {
      setProdutos(json);
    })
  }

  useEffect(() => {
    buscarProdutos();
  }, []);


  return (
    <div className="p-[60px] bg-violet-100 h-screen overflow-auto flex gap-4">
        <OrderProvider>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {
              produtos.map(produto => (
                <Card
                  key={produto.id}
                  {...produto}
                />
              ))
            }
          </div>
          <div className="w-[300px] bg-white p-5 rounded">
            <h3 className="font-bold text-2xl">Carrinho</h3>
            <ShoppingCart />
          </div>
        </OrderProvider>
    </div>
  );
}

export default App;