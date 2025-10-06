import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const ShoppingCart = () => {
    const [quantidade, setQuantidade] = useState(1);

    function controlarQuantidade(adicionar = false) {
        if (adicionar) {
            setQuantidade(quantidade + 1);
        } else {
            if (quantidade > 1) {
                setQuantidade(quantidade - 1);
            }
        }
    }

    return (
        <>
            <div className="flex">
                <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                    alt=""
                    className="w-[60px] h-[60px] object-contain m-auto"
                />
                <div className="flex-1">
                    <h3 className="line-clamp-1">Nome do produto</h3>
                    <div className="w-full flex">
                        <div className="h-[30px] flex items-center gap-3 border border-violet-300 rounded-[25px] px-4">
                            <BiMinus onClick={() => controlarQuantidade()} className="cursor-pointer" />
                            <span>{quantidade}</span>
                            <BiPlus onClick={() => controlarQuantidade(true)} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;