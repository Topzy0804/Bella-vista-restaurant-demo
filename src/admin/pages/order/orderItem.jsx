const OrderItem = ({ orders }) => (
  <div className="orders-grid">
    {orders.map((order) => (
      <div key={order.$id} className="order-card">
        <h4>{order.customerDetails?.name || "Unnamed"}</h4>
        <p>Status: {order.status}</p>
        <p>Items: {order.items?.length || 0}</p>
      </div>
    ))}
  </div>
);
export default OrderItem;