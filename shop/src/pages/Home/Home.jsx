import logo from "../../assets/images/logo.png";
import Eng from "../../assets/images/flags/eng.png";
import Fra from "../../assets/images/flags/fra.png";
const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <h1 className="d-none">
          Wolmart - Responsive Marketplace HTML Template
        </h1>
        {/* Start of Header */}
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                <p className="welcome-msg">
                  Welcome to Wolmart Store message or remove it!
                </p>
              </div>
              <div className="header-right">
                <div className="dropdown">
                  <a href="#currency">USD</a>
                  <div className="dropdown-box">
                    <a href="#USD">USD</a>
                    <a href="#EUR">EUR</a>
                  </div>
                </div>
                {/* End of DropDown Menu */}
                <div className="dropdown">
                  <a href="#language">
                    <img
                      src={Eng}
                      alt="ENG Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />{" "}
                    ENG
                  </a>
                  <div className="dropdown-box">
                    <a href="#ENG">
                      <img
                        src={Eng}
                        alt="ENG Flag"
                        width={14}
                        height={8}
                        className="dropdown-image"
                      />
                      ENG
                    </a>
                    <a href="#FRA">
                      <img
                        src={Fra}
                        alt="FRA Flag"
                        width={14}
                        height={8}
                        className="dropdown-image"
                      />
                      FRA
                    </a>
                  </div>
                </div>
                {/* End of Dropdown Menu */}
                <span className="divider d-lg-show" />
                <a href="blog.html" className="d-lg-show">
                  Blog
                </a>
                <a href="contact-us.html" className="d-lg-show">
                  Contact Us
                </a>
                <a href="my-account.html" className="d-lg-show">
                  My Account
                </a>
                <a
                  href="assets/ajax/login.html"
                  className="d-lg-show login sign-in"
                >
                  <i className="w-icon-account" />
                  Sign In
                </a>
                <span className="delimiter d-lg-show">/</span>
                <a
                  href="assets/ajax/login.html"
                  className="ml-0 d-lg-show login register"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
          {/* End of Header Top */}
          <div className="header-middle">
            <div className="container">
              <div className="header-left mr-md-4">
                <a
                  href="#"
                  className="mobile-menu-toggle  w-icon-hamburger"
                  aria-label="menu-toggle"
                ></a>
                <a href="demo1.html" className="logo ml-lg-0">
                  <img src={logo} alt="logo" width={144} height={45} />
                </a>
                <form
                  method="get"
                  action="#"
                  className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
                >
                  <div className="select-box">
                    <select id="category" name="category">
                      <option value="">All Categories</option>
                      <option value={4}>Fashion</option>
                      <option value={5}>Furniture</option>
                      <option value={6}>Shoes</option>
                      <option value={7}>Sports</option>
                      <option value={8}>Games</option>
                      <option value={9}>Computers</option>
                      <option value={10}>Electronics</option>
                      <option value={11}>Kitchen</option>
                      <option value={12}>Clothing</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    id="search"
                    placeholder="Search in..."
                    required=""
                  />
                  <button className="btn btn-search" type="submit">
                    <i className="w-icon-search" />
                  </button>
                </form>
              </div>
              <div className="header-right ml-4">
                <div className="header-call d-xs-show d-lg-flex align-items-center">
                  <a href="tel:#" className="w-icon-call" />
                  <div className="call-info d-lg-show">
                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                      <a
                        href="https://portotheme.com/cdn-cgi/l/email-protection#9ab9"
                        className="text-capitalize"
                      >
                        Live Chat
                      </a>{" "}
                      or :
                    </h4>
                    <a
                      href="tel:#"
                      className="phone-number font-weight-bolder ls-50"
                    >
                      0(800)123-456
                    </a>
                  </div>
                </div>
                <a
                  className="wishlist label-down link d-xs-show"
                  href="wishlist.html"
                >
                  <i className="w-icon-heart" />
                  <span className="wishlist-label d-lg-show">Wishlist</span>
                </a>
                <a
                  className="compare label-down link d-xs-show"
                  href="compare.html"
                >
                  <i className="w-icon-compare" />
                  <span className="compare-label d-lg-show">Compare</span>
                </a>
                <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                  <div className="cart-overlay" />
                  <a href="#" className="cart-toggle label-down link">
                    <i className="w-icon-cart">
                      <span className="cart-count">2</span>
                    </i>
                    <span className="cart-label">Cart</span>
                  </a>
                  <div className="dropdown-box">
                    <div className="cart-header">
                      <span>Shopping Cart</span>
                      <a href="#" className="btn-close">
                        Close
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                    <div className="products">
                      <div className="product product-cart">
                        <div className="product-detail">
                          <a
                            href="product-default.html"
                            className="product-name"
                          >
                            Beige knitted elas
                            <br />
                            tic runner shoes
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$25.68</span>
                          </div>
                        </div>
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-1.jpg"
                              alt="product"
                              height={84}
                              width={94}
                            />
                          </a>
                        </figure>
                        <button
                          className="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="product product-cart">
                        <div className="product-detail">
                          <a
                            href="product-default.html"
                            className="product-name"
                          >
                            Blue utility pina
                            <br />
                            fore denim dress
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$32.99</span>
                          </div>
                        </div>
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-2.jpg"
                              alt="product"
                              width={84}
                              height={94}
                            />
                          </a>
                        </figure>
                        <button
                          className="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="cart-total">
                      <label>Subtotal:</label>
                      <span className="price">$58.67</span>
                    </div>
                    <div className="cart-action">
                      <a
                        href="cart.html"
                        className="btn btn-dark btn-outline btn-rounded"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-primary  btn-rounded"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/* End of Dropdown Box */}
                </div>
              </div>
            </div>
          </div>
          {/* End of Header Middle */}
          <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
            <div className="container">
              <div className="inner-wrap">
                <div className="header-left">
                  <div
                    className="dropdown category-dropdown has-border"
                    data-visible="true"
                  >
                    <a
                      href="#"
                      className="category-toggle text-dark"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-display="static"
                      title="Browse Categories"
                    >
                      <i className="w-icon-category" />
                      <span>Browse Categories</span>
                    </a>
                    <div className="dropdown-box">
                      <ul className="menu vertical-menu category-menu">
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-tshirt2" />
                            Fashion
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Women</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery &amp; Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Men</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery &amp; Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="banner-fixed menu-banner menu-banner2">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-2.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={347}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <div className="banner-price-info mb-1 ls-normal">
                                    Get up to
                                    <strong className="text-primary text-uppercase">
                                      20%Off
                                    </strong>
                                  </div>
                                  <h3 className="banner-title ls-normal">
                                    Hot Sales
                                  </h3>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-home" />
                            Home &amp; Garden
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Bedroom</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Beds, Frames &amp; Bases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dressers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Nightstands
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kid&apos;s Beds &amp; Headboards
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Armoires
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">Living Room</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Coffee Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Futons &amp; Sofa Beds
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cabinets &amp; Chests
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Office</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Office Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Desks</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bookcases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    File Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Breakroom Tables
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">
                                Kitchen &amp; Dining
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Sets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kitchen Storage Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bashers Racks
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Room Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bar Stools
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner3">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-3.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={461}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                    Restroom
                                  </h4>
                                  <h3 className="banner-title font-weight-bolder text-white ls-normal">
                                    Furniture Sale
                                  </h3>
                                  <div className="banner-price-info text-white font-weight-normal ls-25">
                                    Up to{" "}
                                    <span className="text-secondary text-uppercase font-weight-bold">
                                      25% Off
                                    </span>
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-electronics" />
                            Electronics
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">
                                Laptops &amp; Computers
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Desktop Computers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Monitors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Laptops
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Hard Drives &amp; Storage
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Computer Accessories
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">
                                TV &amp; Video
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">TVs</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Home Audio Speakers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Projectors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Media Streaming Devices
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Digital Cameras</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital SLR Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Sports &amp; Action Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Camera Lenses
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Photo Printer
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital Memory Cards
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">Cell Phones</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Carrier Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Unlocked Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Phone &amp; Cellphone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cellphone Chargers
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner4">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-4.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={433}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal">
                                    Deals Of The Week
                                  </h4>
                                  <h3 className="banner-title text-white">
                                    Save On Smart EarPhone
                                  </h3>
                                  <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                    20% Off
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-outline btn-sm btn-rounded"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-furniture" />
                            Furniture
                          </a>
                          <ul className="megamenu type2">
                            <li className="row">
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Furniture</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Sofas &amp; Couches
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Armchairs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bed Frames
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Beside Tables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Dressing Tables
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Lighting</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Light Bulbs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lamps
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Celling Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Wall Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bathroom Lighting
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Home Accessories</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Decorative Accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Candals &amp; Holders
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Home Fragrance
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Mirrors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Clocks
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">
                                  Garden &amp; Outdoors
                                </h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Garden Furniture
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lawn Mowers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Pressure Washers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      All Garden Tools
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Outdoor Dining
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="row">
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-5.jpg"
                                      alt="Banner"
                                      width={410}
                                      height={123}
                                      style={{ backgroundColor: "#D2D2D2" }}
                                    />
                                  </figure>
                                  <div className="banner-content text-right y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                      New Arrivals
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                      Amazing Sofa
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal">
                                      Starting at <strong>$125.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-6.jpg"
                                      alt="Banner"
                                      width={410}
                                      height={123}
                                      style={{ backgroundColor: "#9F9888" }}
                                    />
                                  </figure>
                                  <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                      Best Seller
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                      Chair &amp; Lamp
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal text-white">
                                      From <strong>$165.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-heartbeat" />
                            Healthy &amp; Beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-gift" />
                            Gift Ideas
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-gamepad" />
                            Toy &amp; Games
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ice-cream" />
                            Cooking
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ios" />
                            Smart Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-camera" />
                            Cameras &amp; Photo
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ruby" />
                            Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-banner-sidebar.html"
                            className="font-weight-bold text-primary text-uppercase ls-25"
                          >
                            View All Categories
                            <i className="w-icon-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <nav className="main-nav">
                    <ul className="menu active-underline">
                      <li className="active">
                        <a href="demo1.html">Home</a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html">Shop</a>
                      </li>

                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="about-us.html">Account</a>
                      </li>
                      <li>
                        <a href="about-us.html">Cart</a>
                      </li>
                      <li>
                        <a href="about-us.html">CheckOut</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <a href="#" className="d-xl-show">
                    <i className="w-icon-map-marker mr-1" />
                    Track Order
                  </a>
                  <a href="#">
                    <i className="w-icon-sale" />
                    Daily Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End of Header */}
        {/* Start of Main*/}

        <footer
          className="footer appear-animate"
          data-animation-options="{
        'name': 'fadeIn'
    }"
        >
          <div className="footer-newsletter bg-primary">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="icon-box icon-box-side text-white">
                    <div className="icon-box-icon d-inline-flex">
                      <i className="w-icon-envelop3" />
                    </div>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-white text-uppercase font-weight-bold">
                        Subscribe To Our Newsletter
                      </h4>
                      <p className="text-white">
                        Get all the latest information on Events, Sales and
                        Offers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                  <form
                    action="#"
                    method="get"
                    className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                  >
                    <input
                      type="email"
                      className="form-control mr-2 bg-white"
                      name="email"
                      id="email"
                      placeholder="Your E-mail Address"
                    />
                    <button className="btn btn-dark btn-rounded" type="submit">
                      Subscribe
                      <i className="w-icon-long-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="widget widget-about">
                    <a href="demo1.html" className="logo-footer">
                      <img
                        src="assets/images/logo_footer.png"
                        alt="logo-footer"
                        width={144}
                        height={45}
                      />
                    </a>
                    <div className="widget-body">
                      <p className="widget-about-title">
                        Got Question? Call us 24/7
                      </p>
                      <a href="tel:18005707777" className="widget-about-call">
                        1-800-570-7777
                      </a>
                      <p className="widget-about-desc">
                        Register now to get updates on pronot get up icons &amp;
                        coupons ster now toon.
                      </p>
                      <div className="social-icons social-icons-colored">
                        <a
                          href="#"
                          className="social-icon social-facebook w-icon-facebook"
                        />
                        <a
                          href="#"
                          className="social-icon social-twitter w-icon-twitter"
                        />
                        <a
                          href="#"
                          className="social-icon social-instagram w-icon-instagram"
                        />
                        <a
                          href="#"
                          className="social-icon social-youtube w-icon-youtube"
                        />
                        <a
                          href="#"
                          className="social-icon social-pinterest w-icon-pinterest"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">Company</h3>
                    <ul className="widget-body">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Team Member</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Affilate</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li>
                        <a href="login.html">Sign In</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="wishlist.html">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">Customer Service</h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Product Returns</a>
                      </li>
                      <li>
                        <a href="#">Support Center</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Term and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle">
              <div className="widget widget-category">
                <div className="category-box">
                  <h6 className="category-name">Consumer Electric:</h6>
                  <a href="#">TV Television</a>
                  <a href="#">Air Condition</a>
                  <a href="#">Refrigerator</a>
                  <a href="#">Washing Machine</a>
                  <a href="#">Audio Speaker</a>
                  <a href="#">Security Camera</a>
                  <a href="#">View All</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Clothing &amp; Apparel:</h6>
                  <a href="#">Men &apos;s T-shirt</a>
                  <a href="#">Dresses</a>
                  <a href="#">Men &apos;s Sneacker</a>
                  <a href="#">Leather Backpack</a>
                  <a href="#">Watches</a>
                  <a href="#">Jeans</a>
                  <a href="#">Sunglasses</a>
                  <a href="#">Boots</a>
                  <a href="#">Rayban</a>
                  <a href="#">Acccessories</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Home, Garden &amp; Kitchen:</h6>
                  <a href="#">Sofa</a>
                  <a href="#">Chair</a>
                  <a href="#">Bed Room</a>
                  <a href="#">Living Room</a>
                  <a href="#">Cookware</a>
                  <a href="#">Utensil</a>
                  <a href="#">Blender</a>
                  <a href="#">Garden Equipments</a>
                  <a href="#">Decor</a>
                  <a href="#">Library</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Health &amp; Beauty:</h6>
                  <a href="#">Skin Care</a>
                  <a href="#">Body Shower</a>
                  <a href="#">Makeup</a>
                  <a href="#">Hair Care</a>
                  <a href="#">Lipstick</a>
                  <a href="#">Perfume</a>
                  <a href="#">View all</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Jewelry &amp; Watches:</h6>
                  <a href="#">Necklace</a>
                  <a href="#">Pendant</a>
                  <a href="#">Diamond Ring</a>
                  <a href="#">Silver Earing</a>
                  <a href="#">Leather Watcher</a>
                  <a href="#">Rolex</a>
                  <a href="#">Gucci</a>
                  <a href="#">Australian Opal</a>
                  <a href="#">Ammolite</a>
                  <a href="#">Sun Pyrite</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">
                    Computer &amp; Technologies:
                  </h6>
                  <a href="#">Laptop</a>
                  <a href="#">iMac</a>
                  <a href="#">Smartphone</a>
                  <a href="#">Tablet</a>
                  <a href="#">Apple</a>
                  <a href="#">Asus</a>
                  <a href="#">Drone</a>
                  <a href="#">Wireless Speaker</a>
                  <a href="#">Game Controller</a>
                  <a href="#">View all</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="copyright">
                  Copyright © 2021 Wolmart Store. All Rights Reserved.
                </p>
              </div>
              <div className="footer-right">
                <span className="payment-label mr-lg-8">
                  We&apos;re using safe payment for
                </span>
                <figure className="payment">
                  <img
                    src="assets/images/payment.png"
                    alt="payment"
                    width={159}
                    height={25}
                  />
                </figure>
              </div>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Page-wrapper*/}
      {/* Start of Sticky Footer */}
      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo1.html" className="sticky-link active">
          <i className="w-icon-home" />
          <p>Home</p>
        </a>
        <a href="shop-banner-sidebar.html" className="sticky-link">
          <i className="w-icon-category" />
          <p>Shop</p>
        </a>
        <a href="my-account.html" className="sticky-link">
          <i className="w-icon-account" />
          <p>Account</p>
        </a>
        <div className="cart-dropdown dir-up">
          <a href="cart.html" className="sticky-link">
            <i className="w-icon-cart" />
            <p>Cart</p>
          </a>
          <div className="dropdown-box">
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Beige knitted elas
                      <br />
                      tic runner shoes
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$25.68</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height={84}
                      width={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Blue utility pina
                      <br />
                      fore denim dress
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$32.99</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-2.jpg"
                      alt="product"
                      width={84}
                      height={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">$58.67</span>
            </div>
            <div className="cart-action">
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                View Cart
              </a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">
                Checkout
              </a>
            </div>
          </div>
          {/* End of Dropdown Box */}
        </div>
        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="w-icon-search" />
            <p>Search</p>
          </a>
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
        </div>
      </div>
      {/* End of Sticky Footer */}
      {/* Start of Scroll Top */}
      <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="Top"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up" />{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit={10}
            cx={35}
            cy={35}
            r={34}
            style={{ strokeDasharray: "16.4198, 400" }}
          />
        </svg>{" "}
      </a>
      {/* End of Scroll Top */}
      {/* Start of Mobile Menu */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay" />
        {/* End of .mobile-menu-overlay */}
        <a href="#" className="mobile-menu-close">
          <i className="close-icon" />
        </a>
        {/* End of .mobile-menu-close */}
        <div className="mobile-menu-container scrollable">
          <form action="#" method="get" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
          {/* End of Search Form */}
          <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a href="#main-menu" className="nav-link active">
                  Main Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="main-menu">
              <ul className="mobile-menu">
                <li>
                  <a href="demo1.html">Home</a>
                </li>
                <li>
                  <a href="shop-banner-sidebar.html">Shop</a>
                  <ul>
                    <li>
                      <a href="#">Shop Pages</a>
                      <ul>
                        <li>
                          <a href="shop-banner-sidebar.html">
                            Banner With Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-boxed-banner.html">Boxed Banner</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Full Width Banner
                          </a>
                        </li>
                        <li>
                          <a href="shop-horizontal-filter.html">
                            Horizontal Filter
                            <span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-off-canvas.html">
                            Off Canvas Sidebar
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-infinite-scroll.html">
                            Infinite Ajax Scroll
                          </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-both-sidebar.html">Both Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Shop Layouts</a>
                      <ul>
                        <li>
                          <a href="shop-grid-3cols.html">3 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-4cols.html">4 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-5cols.html">5 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-6cols.html">6 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-7cols.html">7 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-8cols.html">8 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-list.html">List Mode</a>
                        </li>
                        <li>
                          <a href="shop-list-sidebar.html">
                            List Mode With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Pages</a>
                      <ul>
                        <li>
                          <a href="product-variable.html">Variable Product</a>
                        </li>
                        <li>
                          <a href="product-featured.html">
                            Featured &amp; Sale
                          </a>
                        </li>
                        <li>
                          <a href="product-accordion.html">Data In Accordion</a>
                        </li>
                        <li>
                          <a href="product-section.html">Data In Sections</a>
                        </li>
                        <li>
                          <a href="product-swatch.html">Image Swatch</a>
                        </li>
                        <li>
                          <a href="product-extended.html">Extended Info</a>
                        </li>
                        <li>
                          <a href="product-without-sidebar.html">
                            Without Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-video.html">
                            360<sup>o</sup> &amp; Video
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Layouts</a>
                      <ul>
                        <li>
                          <a href="product-default.html">
                            Default<span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-vertical.html">Vertical Thumbs</a>
                        </li>
                        <li>
                          <a href="product-grid.html">Grid Images</a>
                        </li>
                        <li>
                          <a href="product-masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="product-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">Sticky Info</a>
                        </li>
                        <li>
                          <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                        </li>
                        <li>
                          <a href="product-sticky-both.html">Sticky Both</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="vendor-dokan-store.html">Vendor</a>
                  <ul>
                    <li>
                      <a href="#">Store Listing</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            Store listing 1
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-list.html">
                            Store listing 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-list.html">
                            Store listing 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-list.html">
                            Store listing 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Vendor Store</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store.html">Vendor Store 1</a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-product-grid.html">
                            Vendor Store 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-product-grid.html">
                            Vendor Store 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-product-grid.html">
                            Vendor Store 4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Classic</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">
                        Grid
                      </a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">
                            Masonry 2 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">
                            Masonry 3 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">
                            Masonry 4 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">Pages</a>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="become-a-vendor.html">Become A Vendor</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                  <ul>
                    <li>
                      <a href="element-products.html">Products</a>
                    </li>
                    <li>
                      <a href="element-titles.html">Titles</a>
                    </li>
                    <li>
                      <a href="element-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="element-categories.html">Product Category</a>
                    </li>
                    <li>
                      <a href="element-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="element-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="element-alerts.html">Alert &amp; Notification</a>
                    </li>
                    <li>
                      <a href="element-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="element-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="element-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="element-instagrams.html">Instagrams</a>
                    </li>
                    <li>
                      <a href="element-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="element-vendors.html">Vendors</a>
                    </li>
                    <li>
                      <a href="element-icon-boxes.html">Icon Boxes</a>
                    </li>
                    <li>
                      <a href="element-icons.html">Icons</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2" />
                    Fashion
                  </a>
                  <ul>
                    <li>
                      <a href="#">Women</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Men</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-home" />
                    Home &amp; Garden
                  </a>
                  <ul>
                    <li>
                      <a href="#">Bedroom</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Beds, Frames &amp; Bases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dressers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Nightstands</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kid&apos;s Beds &amp; Headboards
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armoires</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Living Room</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Futons &amp; Sofa Beds
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cabinets &amp; Chests
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Office</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Office Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Desks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bookcases</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">File Cabinets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Breakroom Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Kitchen &amp; Dining</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Sets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kitchen Storage Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dining Room Tables
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bar Stools</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-electronics" />
                    Electronics
                  </a>
                  <ul>
                    <li>
                      <a href="#">Laptops &amp; Computers</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Desktop Computers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Monitors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Laptops</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Hard Drives &amp; Storage
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Computer Accessories
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">TV &amp; Video</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">TVs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Audio Speakers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Projectors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Media Streaming Devices
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Digital Cameras</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital SLR Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sports &amp; Action Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Photo Printer</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital Memory Cards
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Cell Phones</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Carrier Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Unlocked Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Phone &amp; Cellphone Cases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cellphone Chargers
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-furniture" />
                    Furniture
                  </a>
                  <ul>
                    <li>
                      <a href="#">Furniture</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sofas &amp; Couches
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armchairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bed Frames</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Beside Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dressing Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lamps</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Celling Lights
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Wall Lights</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Bathroom Lighting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Accessories</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Decorative Accessories
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Candals &amp; Holders
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Fragrance
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Mirrors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clocks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Garden &amp; Outdoors</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Garden Furniture
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Pressure Washers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            All Garden Tools
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Outdoor Dining
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-heartbeat" />
                    Healthy &amp; Beauty
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gift" />
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gamepad" />
                    Toy &amp; Games
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ice-cream" />
                    Cooking
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ios" />
                    Smart Phones
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-camera" />
                    Cameras &amp; Photo
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ruby" />
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="shop-banner-sidebar.html"
                    className="font-weight-bold text-primary text-uppercase ls-25"
                  >
                    View All Categories
                    <i className="w-icon-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End of Mobile Menu */}
      {/* Start of Newsletter popup */}
      <div className="newsletter-popup mfp-hide">
        <div className="newsletter-content">
          <h4 className="text-uppercase font-weight-normal ls-25">
            Get Up to<span className="text-primary">25% Off</span>
          </h4>
          <h2 className="ls-25">Sign up to Wolmart</h2>
          <p className="text-light ls-10">
            Subscribe to the Wolmart market newsletter to receive updates on
            special offers.
          </p>
          <form
            action="#"
            method="get"
            className="input-wrapper input-wrapper-inline input-wrapper-round"
          >
            <input
              type="email"
              className="form-control email font-size-md"
              name="email"
              id="email2"
              placeholder="Your email address"
              required=""
            />
            <button className="btn btn-dark" type="submit">
              SUBMIT
            </button>
          </form>
          <div className="form-checkbox d-flex align-items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="hide-newsletter-popup"
              name="hide-newsletter-popup"
              required=""
            />
            <label
              htmlFor="hide-newsletter-popup"
              className="font-size-sm text-light"
            >
              Don &apos;t show this popup again.
            </label>
          </div>
        </div>
      </div>
      {/* End of Newsletter popup */}
      {/* Start of Quick View */}
      <div className="product product-single product-popup">
        <div className="row gutter-lg">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-gallery product-gallery-sticky">
              <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                <div className="swiper-wrapper row cols-1 gutter-no">
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/1-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/2-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/3-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/4-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
              <div
                className="product-thumbs-wrap swiper-container"
                data-swiper-options="{
                    'navigation': {
                        'nextEl': '.swiper-button-next',
                        'prevEl': '.swiper-button-prev'
                    }
                }"
              >
                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/1-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/2-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/3-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/4-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden p-relative">
            <div className="product-details scrollable pl-0">
              <h2 className="product-title">Electronics Black Wrist Watch</h2>
              <div className="product-bm-wrapper">
                <figure className="brand">
                  <img
                    src="assets/images/products/brand/brand-1.jpg"
                    alt="Brand"
                    width={102}
                    height={48}
                  />
                </figure>
                <div className="product-meta">
                  <div className="product-categories">
                    Category:
                    <span className="product-category">
                      <a href="#">Electronics</a>
                    </span>
                  </div>
                  <div className="product-sku">
                    SKU: <span>MS46891340</span>
                  </div>
                </div>
              </div>
              <hr className="product-divider" />
              <div className="product-price">$40.00</div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "80%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a href="#" className="rating-reviews">
                  (3 Reviews)
                </a>
              </div>
              <div className="product-short-desc">
                <ul className="list-type-check list-style-none">
                  <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                  <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                  <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                </ul>
              </div>
              <hr className="product-divider" />
              <div className="product-form product-variation-form product-color-swatch">
                <label>Color:</label>
                <div className="d-flex align-items-center product-variations">
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ffcc01" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ca6d00" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#1c93cb" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ccc" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#333" }}
                  />
                </div>
              </div>
              <div className="product-form product-variation-form product-size-swatch">
                <label className="mb-1">Size:</label>
                <div className="flex-wrap d-flex align-items-center product-variations">
                  <a href="#" className="size">
                    Small
                  </a>
                  <a href="#" className="size">
                    Medium
                  </a>
                  <a href="#" className="size">
                    Large
                  </a>
                  <a href="#" className="size">
                    Extra Large
                  </a>
                </div>
                <a href="#" className="product-variation-clean">
                  Clean All
                </a>
              </div>
              <div className="product-variation-price">
                <span />
              </div>
              <div className="product-form">
                <div className="product-qty-form">
                  <div className="input-group">
                    <input
                      className="quantity form-control"
                      type="number"
                      min={1}
                      max={10000000}
                    />
                    <button className="quantity-plus w-icon-plus" />
                    <button className="quantity-minus w-icon-minus" />
                  </div>
                </div>
                <button className="btn btn-primary btn-cart">
                  <i className="w-icon-cart" />
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="social-links-wrapper">
                <div className="social-links">
                  <div className="social-icons social-no-color border-thin">
                    <a
                      href="#"
                      className="social-icon social-facebook w-icon-facebook"
                    />
                    <a
                      href="#"
                      className="social-icon social-twitter w-icon-twitter"
                    />
                    <a
                      href="#"
                      className="social-icon social-pinterest fab fa-pinterest-p"
                    />
                    <a
                      href="#"
                      className="social-icon social-whatsapp fab fa-whatsapp"
                    />
                    <a
                      href="#"
                      className="social-icon social-youtube fab fa-linkedin-in"
                    />
                  </div>
                </div>
                <span className="divider d-xs-show" />
                <div className="product-link-wrapper d-flex">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                  >
                    <span />
                  </a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
