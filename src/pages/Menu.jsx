import { useState, useEffect } from "react";
import "./../css/menu.css";
import MenuItem from "../components/menu/MenuItem";
import { getRows } from "../utils/db";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await getRows(import.meta.env.VITE_MENU_TABLE_ID);
        setMenu(response.rows);
        setFilteredMenu(response.rows);
        let categories = new Set();
        response.rows.forEach((item) => categories.add(item.category));
        setCategories(Array.from(categories));
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
      setActiveTab("all");
    } else {
      setFilteredMenu(menu.filter((item) => item.category === category));
      setActiveTab(category);
    }
  };

  return (
    <>
      <main>
        <section className="menu-hero">
          <div className="container">
            <h1>Our Menu</h1>
            <p>
              Discover our carefully crafted selection of authentic Italian
              dishes
            </p>
          </div>
        </section>

        <section className="menu-categories">
          <div className="container">
            <div className="category-tabs">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                data-category="all"
                onClick={() => handleCategoryClick("all")}
              >
                All Items
              </button>
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${
                      activeTab === `${category}` ? "active" : ""
                    }`}
                    data-category={category}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
            </div>

            <div className="menu-grid" id="menuGrid">
              {/* <!-- Menu items will be populated by JavaScript --> */}
              {menu.length > 0 && <MenuItem menu={filteredMenu} />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
