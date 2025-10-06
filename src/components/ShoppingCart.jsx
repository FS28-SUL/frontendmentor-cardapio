import { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { OrderContext } from "../contexts/OrderContext";

const ShoppingCart = () => {
    const { produtos, total, setTotal } = useContext(OrderContext);
    
    
    useEffect(() => {
        setTotal(produtos.reduce((acumulador, produto) => acumulador + (produto.price * produto.qtd), 0));
    }, [produtos])

    return (
        <>
            {
                produtos.map((produto) => (
                    <div key={produto.id} className="flex mb-3">
                        <img
                            src={produto.image}
                            alt={produto.title}
                            className="w-[60px] h-[60px] object-contain m-auto"
                        />
                        <div className="flex-1">
                            <h3 className="line-clamp-1">{produto.title}</h3>
                            <div className="w-full flex">
                                <div className="h-[30px] flex items-center gap-3 border border-violet-300 rounded-[25px] px-4">
                                    <BiMinus className="cursor-pointer" />
                                    <span>{produto.qtd}</span>
                                    <BiPlus className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                produtos.length == 0 ? (
                    <div>Adicione itens :-)</div>
                ) : (
                    <div>Total do pedido: R$ {total.toFixed(2)}</div>
                )
            }
        </>
    );
}

export default ShoppingCart;