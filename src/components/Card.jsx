/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Card = ({ image, category, title, price }) => {
    return (
        <div className="bg-white p-5 rounded">
            <img
                src={image}
                alt={title}
                className="h-[200px] object-cover"
            />
            <h6>{category}</h6>
            <h3>{title}</h3>
            <h5>R$ {price.toFixed(2)}</h5>
        </div>
    );
}

export default Card;