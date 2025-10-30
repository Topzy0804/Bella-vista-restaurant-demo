import { useEffect, useState } from "react";

import { getRows } from "../utils/db";
import { createRows } from "../utils/db";

import "./order.css";

import OrderMenuItem from "./OrderMenuItem.jsx";
import CartMenuItem from "../components/form/order/cartMenuItem";



const Order = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartAdded, setcartAdded] = useState(false);


  const [customerFormData, setCustomerFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const addNewCustomerDetails = async (e) => {
    try {
      // e.preventDefault();
      const newCustomerDetails = {
        name: customerFormData.name,
        email: customerFormData.email,
        address: customerFormData.address,
        phone: customerFormData.phone,
      };
      await createRows(import.meta.env.VITE_CUSTOMER_DETAILS_TABLE_ID, newCustomerDetails);

      setCustomerFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error adding new customer details:", error);
    };
  };

  const [orderData, setOrderData] = useState({
    items: "",
    status: "",
    customerDetails: "",
  });

  const addOrderDetail = async (e) => {
    try {
      // e.preventDefault();
      const newOrder = {
        items: orderData.items,
        status: orderData.status,
        customerDetails: orderData.customerDetails,
      };
      await createRows(import.meta.env.VITE_ORDER_TABLE_ID, newOrder);

      setOrderData({
        items: "",
        status: "",
        customerDetails: "",
      });
    } catch (error) {
      console.error("Error adding new order:", error);
    }
  };

  useEffect(() => {
    // On initial load, show all items
    handleCategoryClick();
  }, []);

  const handleCategoryClick = async (category = "all") => {
    if (category === "all") {
      const response = await getRows(import.meta.env.VITE_MENU_TABLE_ID);
      setMenu(response.rows);
      setFilteredMenu(response.rows);

      // Extract unique categories from the fetched menu items
      let categories = new Set();
      response.rows.forEach((item) => categories.add(item.category));
      setCategories(Array.from(categories));

      setActiveTab("all");
    } else {
      setFilteredMenu(menu.filter((item) => item.category === category));
      setActiveTab(category);
    }
  };

  const addToCart = (itemId) => {
    const existingItem = cartItems.find((item) => item.$id === itemId);
    if (existingItem) {
      handleQuantityUpdate(itemId, existingItem.quantity + 1);
      return;
    }


    const cartData = menu.find((item) => item.$id === itemId);
    const newCartItem = {
      $id: cartData.$id,
      name: cartData.name,
      price: cartData.price,
      imgURL: cartData.imgURL,
      quantity: 1,
    };
    setCartItems((prevItems) => [...prevItems, newCartItem]);
    setcartAdded(true);
  };

  const handleCheckout = async (e) => {
    // Logic to handle checkout process
    e.preventDefault();

    try {
      const newCustomer = {
        name: customerFormData.name,
        email: customerFormData.email,
        address: customerFormData.address,
        phone: customerFormData.phone,
      };
      const customerDetails = await createRows(import.meta.env.VITE_CUSTOMER_DETAILS_TABLE_ID, newCustomer);
      // console.log(newCustomer);



    const OrderSummary = {
      items: cartItems.map((item)=> JSON.stringify(item)),
      customerDetails: customerDetails.$id,
    };
    console.log(cartItems.map((item)=> JSON.stringify(item)))

    // console.log(OrderSummary)
    await createRows(import.meta.env.VITE_ORDER_TABLE_ID, OrderSummary);

    // Clear cart and reset form
    alert("Order placed successfully!");
    setCartItems([]);
    setSubtotal(0);
    setTax(0);
    setTotal(0);
  } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.$id !== itemId));
    setcartAdded(cartItems.length - 1 > 0);
  };

  const handleQuantityUpdate = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.$id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handlePriceCalculation = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal = subtotal + item.price * item.quantity;
    });
    const tax = subtotal * 0.07;
    const total = subtotal + tax;
    setSubtotal(subtotal.toFixed(2));
    setTax(tax.toFixed(2));
    setTotal(total.toFixed(2));
  };

  useEffect(() => {
    handlePriceCalculation();
  }, [cartItems]);

  return (
    <main>
      <section className="order-hero">
        <div className="container">
          <h1>Place Your Order</h1>
          <p>
            Choose from our delicious selection and have it delivered fresh to
            your door
          </p>
        </div>
      </section>

      <section className="order-content">
        <div className="container">
          <div className="order-layout">
            <div className="order-menu">
              <div className="category-selector">
                <button
                  className={`category-btn ${
                    activeTab === "all" ? "active" : ""
                  }`}
                  data-category="all"
                  onClick={() => handleCategoryClick("all")}
                >
                  All
                </button>
                {categories.length > 0 &&
                  categories.map((category, index) => (
                    <button
                      key={index}
                      className={`category-btn ${
                        activeTab === category ? "active" : ""
                      }`}
                      style={{ textTransform: "capitalize" }}
                      data-category={`${category}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
              </div>

              <div className="menu-items" id="orderMenuItems">
                {/* <!-- Menu items will be populated here --> */}
                {menu.length > 0 && (
                  <OrderMenuItem menu={filteredMenu} addToCart={addToCart}
                  removeFromCart={handleRemoveFromCart} />
                )}
              </div>
            </div>

            <div className="cart-section">
              <div className="cart-header">
                <h3>Your Order</h3>
                <span className="cart-count" id="cartCount">
                  {cartItems.length} items
                </span>
              </div>

              {cartItems.length > 0 ? (
                /* <!-- Cart items will be populated here --> */
                <CartMenuItem
                  menu={cartItems}
                  handleQuantityUpdate={handleQuantityUpdate}
                  handleRemoveFromCart={handleRemoveFromCart}
                
                />
              ) : (
                <div className="cart-items" id="cartItems">
                  <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <p>Add some delicious items to get started!</p>
                  </div>
                </div>
              )}

              {cartAdded && (
                <>
                  <h5 >Complete your order details</h5>
                  <form className="customer-details-form" onSubmit={addNewCustomerDetails}>
                    <div className="form-group">
                      <label htmlFor="CustomerName">Name:</label>
                      <input
                        className="form-input"
                        type="text"
                        id="CustomerName"
                        name="CustomerName"
                        value={customerFormData.name}
                        onChange={(e) =>
                          setCustomerFormData({ ...customerFormData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customerEmail">Email:</label>
                      <input
                        className="form-input"
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={customerFormData.email}
                        onChange={(e) =>
                          setCustomerFormData({ ...customerFormData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customerphone">Phone:</label>
                      <input
                        className="form-input"
                        type="text"
                        id="customerphone"
                        name="customerphone"
                        value={customerFormData.phone}
                        onChange={(e) =>
                          setCustomerFormData({ ...customerFormData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customerAddress">Address:</label>
                      <input
                        className="form-input"
                        type="text"
                        id="customerAddress"
                        name="customerAddress"
                        value={customerFormData.address}
                        onChange={(e) =>
                          setCustomerFormData({ ...customerFormData, address: e.target.value })
                        }
                        required
                      />
                    </div>
                  </form>
                </>
              )}

              <div className="cart-footer">
                <div className="cart-total">
                  <div className="total-line">
                    <span>Subtotal:</span>
                    <span id="subtotal">${subtotal}</span>
                  </div>
                  <div className="total-line">
                    <span>Tax:</span>
                    <span id="tax">${tax}</span>
                  </div>
                  <div className="total-line total">
                    <span>Total:</span>
                    <span id="total">${total}</span>
                  </div>
                </div>
                <button
                  className="btn btn-primary checkout-btn"
                  id="checkoutBtn"
                  disabled={cartItems.length == 0}
                  type="submit"
                  onClick={handleCheckout}
                  // setCartItems([]);
                  // setSubtotal(0);
                  // setTax(0);
                  // setTotal(0);
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Order;
