import { useState } from "react";
import { createRows } from "../../../utils/db";

const NewMenu = ({ setOpenMenuModal }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemCategory: "",
    itemImage: "",
    itemTags: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseModal = () => {
    setOpenMenuModal(false);
  };

  const handleAddNewMenu = async (e) => {
    try {
      e.preventDefault();
      const newMenuItem = {
        name: formData.itemName,
        description: formData.itemDescription,
        price: parseFloat(formData.itemPrice),
        category: formData.itemCategory,
        imgURL: formData.itemImage,
        tags: formData.itemTags
          ? formData.itemTags.split(",").map((tag) => tag.trim())
          : [],
      };

      await createRows(import.meta.env.VITE_MENU_TABLE_ID, newMenuItem);
      alert("New menu item added successfully!");

      // Reset form after submission
      setFormData({
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemCategory: "",
        itemImage: "",
        itemTags: "",
      });
      setOpenMenuModal(false);
    } catch (error) {
      console.error("Error adding new menu item:", error);
    }
  };

  return (
    <div id="itemModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTitle">Add New Menu Item</h2>
          <span className="close" onClick={handleCloseModal}>
            X
          </span>
        </div>
        <form id="itemForm" className="modal-form" onSubmit={handleAddNewMenu}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
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
            <label htmlFor="itemPrice">Price ($)</label>
            <input
              className="form-input"
              type="number"
              id="itemPrice"
              name="itemPrice"
              value={formData.itemPrice}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemCategory">Category</label>
            <select
              className="form-select"
              id="itemCategory"
              name="itemCategory"
              value={formData.itemCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="appetizers">Appetizers</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
              <option value="mains">Main Courses</option>
              <option value="desserts">Desserts</option>
            </select>
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
          <div className="form-group">
            <label htmlFor="itemTags">Tags (comma separated)</label>
            <input
              className="form-input"
              type="text"
              id="itemTags"
              name="itemTags"
              value={formData.itemTags}
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
              Save Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMenu;
