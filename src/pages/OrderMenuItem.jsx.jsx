import "./order.css";

const OrderMenuItem = ({ menu, addToCart }) => {
  return (
    <>
      {menu.map((item) => (
        <div key={item.$id} className="order-menu-item">
          <div className="item-image">
            <img src={item.imgURL} alt="" loading="lazy" />
          </div>
          <div className="item-details">
            <div className="item-name">{item.name}</div>
            <div className="item-description">{item.description}</div>
            <div className="item-price">{item.price}</div>
          </div>
          <button className="add-to-cart-btn" onClick={()=>{addToCart(item.$id)}}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default OrderMenuItem;
