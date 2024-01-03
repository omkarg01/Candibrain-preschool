const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/animate.min.css" rel="stylesheet" type="text/css">
  <link href="css/javascript-plugins-bundle.css" rel="stylesheet" />

  <!-- CSS | menuzord megamenu skins -->
  <link href="js/menuzord/css/menuzord.css" rel="stylesheet" />

  <!-- CSS | Main style file -->
  <link href="css/style-main.css" rel="stylesheet" type="text/css">
  <link id="menuzord-menu-skins" href="css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet" />

  <!-- CSS | Responsive media queries -->
  <link href="css/responsive.css" rel="stylesheet" type="text/css">
  <!-- CSS | Style css. This is the file where you can place your own custom css code. Just uncomment it and use it. -->

  <!-- CSS | Theme Color -->
  <link href="css/colors/theme-skin-color-set5.css" rel="stylesheet" type="text/css">

  <!-- external javascripts -->
  <script src="js/jquery.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/javascript-plugins-bundle.js"></script>
  <script src="js/menuzord/js/menuzord.js"></script>

  <!-- REVOLUTION STYLE SHEETS -->
  <link rel="stylesheet" type="text/css" href="js/revolution-slider/css/rs6.css">
  <link rel="stylesheet" type="text/css" href="js/revolution-slider/extra-rev-slider1.css">
  <!-- REVOLUTION LAYERS STYLES -->
  <!-- REVOLUTION JS FILES -->
  <script src="js/revolution-slider/js/revolution.tools.min.js"></script>
  <script src="js/revolution-slider/js/rs6.min.js"></script>
  <script src="js/revolution-slider/extra-rev-slider1.js"></script>
<header id="header" class="header header-layout-type-header-2rows">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-xl-auto header-top-left align-self-center text-center text-xl-start">
              <ul class="element contact-info">
                <li class="contact-phone"><i class="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298</li>
                <li class="contact-email"><i class="fa fa-envelope font-icon sm-display-block"></i> info@example.com
                </li>
                <li class="contact-address"><i class="fa fa-map font-icon sm-display-block"></i> 121 King Street,
                  Melbourne</li>
              </ul>
            </div>
            <div class="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
              <div class="element pt-0 pb-0">
                <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                  <li><a class="social-link" href="#"><i class="fab fa-facebook"></i></a></li>
                  <li><a class="social-link" href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a class="social-link" href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
              </div>
              <div class="element pt-0 pt-lg-10 pb-0">
                <a href="ajax-load/form-appointment.html" class="btn btn-theme-colored2 btn-sm ajaxload-popup">Make an
                  Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-nav tm-enable-navbar-hide-on-scroll">
        <div class="header-nav-wrapper navbar-scrolltofixed">
          <div class="menuzord-container header-nav-container">
            <div class="container position-relative">
              <div class="row header-nav-col-row">
                <div class="col-sm-auto align-self-center">
                  <a class="menuzord-brand site-brand" href="index-mp-layout1.html">
                    <img class="logo-default logo-1x" src="images/CandiBrain.png" alt="Logo">
                    <img class="logo-default logo-2x retina" src="images/CandiBrain.png" alt="Logo">
                  </a>
                </div>
                <div class="col-sm-auto ms-5 pr-0 align-self-center">
                  <nav id="top-primary-nav" class="menuzord theme-color1" data-effect="fade" data-animation="none"
                    data-align="right">
                    <ul id="main-nav" class="menuzord-menu">
                      <li id="home" class=" menu-item">
                        <a  href="index.html">Home</a>
                      </li>
                      <li id="about" class=" menu-item">
                        <a href="aboutUs.html">About Us</a>
                      </li>
                      <li id="program" class=" menu-item">
                        <a href="/program.html">Program</a>
                      </li>
                      <li class=" menu-item">
                        <a href="#">Gallery</a>
                      </li>
                      <li class=" menu-item">
                        <a href="#">Activity</a>
                      </li>
                      <li class=" menu-item">
                        <a href="#">Reach Us</a>
                      </li>
                      <li class=" menu-item">
                        <a href="#">Library</a>
                      </li>
                      <li class=" menu-item">
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- <div class="col-sm-auto align-self-center nav-side-icon-parent">
                  <ul class="list-inline nav-side-icon-list">
                    <li class="hidden-mobile-mode"><a href="#" id="top-nav-search-btn"><i
                          class="search-icon fa fa-search"></i></a></li>
                    <li class="hidden-mobile-mode">
                      <div class="top-nav-mini-cart-icon-container">
                        <div class="top-nav-mini-cart-icon-contents">
                          <a class="mini-cart-icon" href="shop-cart.html" title="View your shopping cart">
                            <img src="images/shopping-cart.png" width="25" alt="cart"><span class="items-count">1</span>
                            <span class="cart-quick-info">1 item - <span class="amount"><span
                                  class="currencySymbol">&pound;</span>18.00</span></span>
                          </a>
                          <div class="dropdown-content">
                            <ul class="cart_list product_list_widget">
                              <li class="mini_cart_item">
                                <a href="#" class="remove remove_from_cart_button" aria-label="Remove this item"
                                  data-product_id="18832" data-cart_item_key="#"
                                  data-product_sku="woo-beanie">&times;</a>
                                <a href="#"> <img class="attachment-thumbnail" src="images/shop/product.jpg" width="300"
                                    height="300" alt="" />Beanie</a>
                                <span class="quantity">1 &times; <span class="amount">
                                    <span class="currencySymbol">&pound;</span>18.00</span></span>
                              </li>
                            </ul>
                            <p class="total"> <strong>Subtotal:</strong> <span
                                class="woocommerce-Price-amount amount"><span
                                  class="currencySymbol">&pound;</span>18.00</span> </p>
                            <div class="buttons cart-action-buttons">
                              <div class="row">
                                <div class="col-6 pe-0"><a href="shop-cart.html"
                                    class="btn btn-theme-colored2 btn-block btn-sm wc-forward">View Cart</a></div>
                                <div class="col-6 ps-1"><a href="shop-checkout.html"
                                    class="btn btn-theme-colored1 btn-block btn-sm checkout wc-forward">Checkout</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="hidden-mobile-mode">
                      <div id="side-panel-trigger" class="side-panel-trigger">
                        <a href="#">
                          <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div id="top-nav-search-form" class="clearfix">
                    <form action="#" method="GET">
                      <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                    </form>
                    <a href="#" id="close-search-btn"><i class="fa fa-times"></i></a>
                  </div>
                </div> -->
              </div>
              <div class="row d-block d-xl-none">
                <div class="col-12">
                  <nav id="top-primary-nav-clone"
                    class="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive"
                    data-effect="slide" data-animation="none" data-align="right">
                    <ul id="main-nav-clone" class="menuzord-menu menuzord-right menuzord-indented scrollable">
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

        console.log("window.location.href",window.location.href);
        var currentUrl = window.location.href;

        var liElements = this.shadowRoot.querySelectorAll('#main-nav li');
        
        
        // Add click event listeners to each <li> element
        liElements.forEach(li => {
            var linkText = li.querySelector('a');
            console.log("href", linkText.href);
            if (currentUrl == linkText.href) {
                console.log("boolean", currentUrl == linkText.href);
                li.classList.add('active');
            }
        });

        // Attach click event listeners to handle link clicks
        // this.shadowRoot.getElementById('home').addEventListener('click', () => this.handleLinkClick('home'));
        // this.shadowRoot.getElementById('about').addEventListener('click', () => this.handleLinkClick('about'));
        // this.shadowRoot.getElementById('program').addEventListener('click', () => this.handleLinkClick('program'));
        // this.shadowRoot.getElementById('page').addEventListener('click', () => this.handleLinkClick('page'));
    }

    handleLinkClick(clickedLinkId) {
        // Remove "active" class from all links
        // Get the <ul> element with the ID "main-nav"
        var mainNav = this.shadowRoot.getElementById('main-nav');

        // Get all direct children <a> tags of the <ul> element
        const allLinks = mainNav.querySelectorAll('> li > a');
        // const allLinks = this.shadowRoot.querySelectorAll('a');
        allLinks.forEach(link => link.classList.remove('active'));
        console.log("clickedLinkId", clickedLinkId);

        // Add "active" class to the clicked link
        const clickedLink = this.shadowRoot.getElementById(clickedLinkId);
        console.log("clickedLink", clickedLink);
        clickedLink.classList.add('active');
    }
}

customElements.define('header-component', Header);
