const OrderItem = ({ orders }) => (
  <div className="orders-grid">
    {orders.map((order) => (
      <div key={order.$id} className="order-card">
        <h4>{order.customerDetails.name}</h4>
        <p>Status: {order.status}</p>
        <p>Items: {order.items.length}</p>
      </div>
    ))}
  </div>
);
export default OrderItem;