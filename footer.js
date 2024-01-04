const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `


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

  <footer id="footer" class="footer">
      <div class="footer-widget-area">
        <div class="container pt-90 ">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-4">
              <img class="mb-30" alt="Logo" width="100" src="images/CandiBrain.png">
              <div className="text-decoration font-size-15">
                <strong>
                  Candibrain Preschool - an IITian's Initiative
                </strong>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="widget ">
                <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Opening Hours</h4>
                <div className="opening-hours border-dark col-12">
                  <ul>
                    <li className="clearfix">
                      <div className="value"><span> Mon - Fri : </span> 8.00 am - 8.00 pm </div>
                    </li>
                    <li className="clearfix">
                      <div className="value"><span> Sat - Sun : </span> Closed </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-1"></div>
            <div class="col-md-6 col-lg-6 col-xl-4 p-0">
              <div class="widget p-40" data-tm-bg-color="#192637">
                <h4 class="widget-title">Contact</h4>
                <ul class="tm-widget">
                  <li><span class="fa fa-phone-square text-theme-colored1 mr-10"></span> <span> +91 8925353323</span>
                  </li>
                  <li><span class="fa fa-envelope text-theme-colored1 mr-10"></span> <span>
                      contact@candibrainpreschool.com</span>
                  </li>
                  <li><span class="fa fa-map-marker text-theme-colored1 mr-10"></span> <span> Vilankurchi,
                      Saravanampatti, Coimbatore</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom" data-tm-bg-color="black">
          <div class="container">
            <div class="row pt-20 pb-20">
              <div class="col-sm-6">
                <div class="footer-paragraph text-center text-xl-left text-lg-start text-md-left mb-sm-30">
                  © 2023 Candibrain. All Rights Reserved.
                </div>
              </div>
              <div class="col-sm-6">
                <div class="footer-paragraph text-center text-xl-end text-lg-end text-md-end">
                  <ul class="styled-icons icon-md icon-dark icon-hover-theme-colored1 icon-circled clearfix">
                    <li><a class="social-link" href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a class="social-link" href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a class="social-link" href="#"><i class="fab fa-youtube"></i></a></li>
                    <li><a class="social-link" href="#"><i class="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);
