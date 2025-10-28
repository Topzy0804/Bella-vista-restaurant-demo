const MenuItem = ({ menu }) => {
  return (
    <>
      {menu.map((item) => (
        <div key={item.$id} className="menu-item">
          <div className="menu-item-image">
            <img src={item.imgURL} alt={item.name} loading="lazy" />
          </div>
          <div className="menu-item-content">
            <div className="menu-item-header">
              <h3 className="menu-item-title">{item.name}</h3>
              <span className="menu-item-price">${item.price.toFixed(2)}</span>
            </div>
            <p className="menu-item-description">{item.description}</p>
            <div className="menu-item-tags">
              {item.tags.map((tag, index) => (
                <span key={index} className={`menu-tag ${tag}`}>
                  {tag}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
