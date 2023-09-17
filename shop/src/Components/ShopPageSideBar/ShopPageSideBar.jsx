import "./ShopPageSidebar.css";

const ShopPageSideBar = () => {
  return (
    <>
      {/* Start of Sidebar, Shop Sidebar */}
      <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
        {/* Start of Sidebar Overlay */}
        <div className="sidebar-overlay" />
        <a className="sidebar-close" href="#">
          <i className="close-icon" />
        </a>
        {/* Start of Sidebar Content */}
        <div className="sidebar-content scrollable">
          {/* Start of Sticky Sidebar */}
          <div className="sticky-sidebar">
            <div className="filter-actions">
              <label>Filter :</label>
              <a href="#" className="btn btn-dark btn-link filter-clean">
                Clean All
              </a>
            </div>
            {/* Start of Collapsible widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Search Product</span>
              </h3>
              <form className="form w-full d-flex">
                <input
                  type="text"
                  name="search"
                  className=" text-center"
                  placeholder="Search Products"
                  style={{ width: "100%" }}
                />
                <button className="btn btn-primary h-auto btn-rounded">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>All Categories</span>
              </h3>
              <ul className="widget-body filter-items search-ul">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Babies</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
                <li>
                  <a href="#">Decoration</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Kitchen</a>
                </li>
                <li>
                  <a href="#">Medical</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Watches</a>
                </li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Price</span>
              </h3>
              <div className="widget-body">
                <ul className="filter-items search-ul">
                  <li>
                    <a href="#">$0.00 - $100.00</a>
                  </li>
                  <li>
                    <a href="#">$100.00 - $200.00</a>
                  </li>
                  <li>
                    <a href="#">$200.00 - $300.00</a>
                  </li>
                  <li>
                    <a href="#">$300.00 - $500.00</a>
                  </li>
                  <li>
                    <a href="#">$500.00+</a>
                  </li>
                </ul>
                <form className="price-range">
                  <input
                    type="number"
                    name="min_price"
                    className="min_price text-center"
                    placeholder="$min"
                  />
                  <span className="delimiter">-</span>
                  <input
                    type="number"
                    name="max_price"
                    className="max_price text-center"
                    placeholder="$max"
                  />
                  <a href="#" className="btn btn-primary btn-rounded">
                    Go
                  </a>
                </form>
              </div>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Size</span>
              </h3>
              <ul className="widget-body filter-items item-check mt-1">
                <li>
                  <a href="#">Extra Large</a>
                </li>
                <li>
                  <a href="#">Large</a>
                </li>
                <li>
                  <a href="#">Medium</a>
                </li>
                <li>
                  <a href="#">Small</a>
                </li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Brand</span>
              </h3>
              <ul className="widget-body filter-items item-check mt-1">
                <li>
                  <a href="#">Elegant Auto Group</a>
                </li>
                <li>
                  <a href="#">Green Grass</a>
                </li>
                <li>
                  <a href="#">Node Js</a>
                </li>
                <li>
                  <a href="#">NS8</a>
                </li>
                <li>
                  <a href="#">Red</a>
                </li>
                <li>
                  <a href="#">Skysuite Tech</a>
                </li>
                <li>
                  <a href="#">Sterling</a>
                </li>
              </ul>
            </div>
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Tags</span>
              </h3>
              <div className="tag-list">
                <a href="">Electronic</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Baby</a>
              </div>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            {/* <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <span>Color</span>
          </h3>
          <ul className="widget-body filter-items item-check mt-1">
            <li>
              <a href="#">Black</a>
            </li>
            <li>
              <a href="#">Blue</a>
            </li>
            <li>
              <a href="#">Brown</a>
            </li>
            <li>
              <a href="#">Green</a>
            </li>
            <li>
              <a href="#">Grey</a>
            </li>
            <li>
              <a href="#">Orange</a>
            </li>
            <li>
              <a href="#">Yellow</a>
            </li>
          </ul>
        </div> */}
            {/* End of Collapsible Widget */}
          </div>
          {/* End of Sidebar Content */}
        </div>
        {/* End of Sidebar Content */}
      </aside>
      {/* End of Shop Sidebar */}
    </>
  );
};

export default ShopPageSideBar;
