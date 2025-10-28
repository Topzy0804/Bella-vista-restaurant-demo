import { useState, useEffect } from "react";
import NewMenu from "../components/Modal/NewMenu";
import MenuItem from "../../components/menu/MenuItem";
import { getRows } from "../../utils/db";

const Menu = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [menu, setMenu] = useState([]);

  const handleOpenMenuModal = () => {
    setOpenMenuModal(true);
  };

  useEffect(()=> {
      const fetchMenuItems = async () => {
        try {
          const response = await getRows(import.meta.env.VITE_MENU_TABLE_ID);
          setMenu(response.rows);
        } catch (error) {
          console.error("Error fetching menu items:", error);
        }
      };

      fetchMenuItems();
  },[])

  return (
    <>
      {openMenuModal && <NewMenu setOpenMenuModal={setOpenMenuModal} />}
      <main className="admin-main">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Menu Management</h1>
            <button className="btn btn-primary" onClick={handleOpenMenuModal}>
              Add New Item
            </button>
          </div>
          <div className="menu-filters">
            <div className="filter-group">
              <label htmlFor="categoryFilter">Filter by Category:</label>
              <select id="categoryFilter" className="form-select">
                <option value="all">All Categories</option>
                <option value="appetizers">Appetizers</option>
                <option value="pasta">Pasta</option>
                <option value="pizza">Pizza</option>
                <option value="mains">Main Courses</option>
                <option value="desserts">Desserts</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="searchMenu">Search:</label>
              <input
                type="text"
                id="searchMenu"
                className="form-input"
                placeholder="Search menu items..."
              />
            </div>
          </div>

          <div className="menu-management-grid" id="menuManagementGrid">
            {/* <!-- Menu items will be populated here --> */}
            {menu.length > 0 && <MenuItem menu={menu} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
