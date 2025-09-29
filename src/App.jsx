import { useEffect, useState } from "react";
import Card from "./components/Card";

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
        <div className="w-[300px] bg-white p-5 rounded">Carrinho</div>
    </div>
  );
}

export default App;