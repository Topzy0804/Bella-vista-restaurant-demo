const CartMenuItem = ({ menu, handleQuantityUpdate, handleRemoveFromCart }) => {
  return (
    <>
      {menu.map((item) => (
        <div key={item.$id} className="cart-item">
          <div className="cart-item-image">
            <img src={item.imgURL} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">${item.price}</div>
          </div>
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={()=>handleQuantityUpdate(item.$id, item.quantity - 1)}>
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button className="quantity-btn" onClick={()=>handleQuantityUpdate(item.$id, item.quantity + 1)}>
              +
            </button>
            <button className="remove-btn" onClick={() => handleRemoveFromCart(item.$id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartMenuItem;
