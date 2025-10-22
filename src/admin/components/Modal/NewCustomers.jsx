import { useState } from "react";

const NewCustomer = ({ setOpenContactModal }) => {
  const [formData, setFormData] = useState({

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseModal = () => {
    setOpenContactModal(false);
  };

  const handleAddNewContact = async (e) => {
    try {
      e.preventDefault();
     

  return (
    <div id="itemModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTitle">Add New Customers</h2>
          <span className="close" onClick={handleCloseModal}>
            X
          </span>
        </div>
        <form id="itemForm" className="modal-form" onSubmit={handleAddNewContact}>
          <div className="form-group">
            <label htmlFor="itemName">Customer Name</label>
            <input
              className="form-input"
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Description</label>
            <textarea
              className="form-textarea"
              id="itemDescription"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="itemImage">Image URL</label>
            <input
              className="form-input"
              type="url"
              id="itemImage"
              name="itemImage"
              value={formData.itemImage}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Customers
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCustomer;
