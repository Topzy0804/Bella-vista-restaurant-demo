const CustomerDetails = ({ customer }) => {
  return (
    <>
    <tr>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.ordersCount}</td>
      <td>{customer.totalSpent}</td>
      <td>{customer.joinedDate}</td>
      <td>
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </td>
    </tr>

    </>
  );
};

export default CustomerDetails;
