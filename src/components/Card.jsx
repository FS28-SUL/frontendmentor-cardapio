/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { OrderContext } from "../contexts/OrderContext";

/* eslint-disable react/prop-types */
const Card = ({ image, category, title, price, id }) => {

    const [adicionado, setAdicionado] = useState(false);
    const [quantidade, setQuantidade] = useState(1);
    const { produtos, setProdutos } = useContext(OrderContext);

    function inserirNoCarrinho(qtd) {
        setProdutos([...produtos, {
            id,
            title,
            image,
            price,
            qtd
        }]);
    }
    function controlarQuantidade(adicionar = false) {
        if (adicionar) {
            setQuantidade(quantidade + 1);
            const produtoExiste = produtos.some(produto => produto.id == id);
            if (produtoExiste) {
                setProdutos(produtos.map(produto => {
                    if (produto.id == id) {
                        produto.qtd++;
                    }
                    return produto;
                }))
            }
        } else {
            if (quantidade > 1) {
                setQuantidade(quantidade - 1);
                setProdutos(produtos.map(produto => {
                    if (produto.id == id) {
                        produto.qtd--;
                    }
                    return produto;
                }))
            } else {
                setAdicionado(false);
                setProdutos(produtos.filter(produto => produto.id != id));
            }
        }
    }

    return (
        <div className="bg-white p-5 rounded" title={title}>
            <img
                src={image}
                alt={title}
                className="h-[200px] object-contain m-auto"
            />
            <h6 className="text-xs font-bold mt-3">{category}</h6>
            <h3 className="line-clamp-1">{title}</h3>
            <div className="flex justify-between items-center mt-3">
                <h5 className="font-bold text-xl">R$ {price.toFixed(2)}</h5>
                {
                    adicionado ? (
                        <div className="h-[30px] flex items-center gap-3 border border-violet-300 rounded-[25px] px-4">
                            <BiMinus onClick={() => controlarQuantidade()} className="cursor-pointer" />
                            <span>{quantidade}</span>
                            <BiPlus onClick={() => controlarQuantidade(true)} className="cursor-pointer" />
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                setAdicionado(true);
                                inserirNoCarrinho(1);
                            }}
                            className="bg-violet-500 text-white leading-[30px] px-4 rounded-[25px] hover:bg-violet-600 duration-200 cursor-pointer hover:shadow-lg">Adicionar</button>
                    )
                }
            </div>
        </div>
    );
}

export default Card;