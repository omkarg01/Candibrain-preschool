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

  <footer id="footer" class="footer divider layer-overlay overlay-dark-8"
      data-tm-bg-img="https://via.placeholder.com/1920x834">
      <div class="footer-widget-area">
        <div class="container pt-90 pb-40">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-4">
              <div class="widget tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
                <div class="thumb">
                  <img alt="Logo" class="w-25" src="images/CandiBrain.png">
                </div>
                <div className="text-decoration font-size-15">
                    <strong>
                      Candibrain Preschool - an IITian's Initiative
                    </strong>
                  </div>
                <div class="description">Vilankurchi, Saravanampatti, Coimbatore</div>
                <ul class="mb-30">
                  <li class="contact-phone">
                    <div class="icon"><i class="flaticon-contact-042-phone-1"></i></div>
                    <div class="text"><a href="tel:+91 8925353323">+91 8925353323</a></div>
                  </li>
                  <li class="contact-email">
                    <div class="icon"><i class="flaticon-contact-043-email-1"></i></div>
                    <div class="text"><a href="mailto:contact@candibrainpreschool.com">contact@candibrainpreschool.com</a></div>
                  </li>
                  <li class="contact-website">
                    <div class="icon"><i class="flaticon-contact-035-website"></i></div>
                    <div class="text"><a target="_blank" href="https://www.candibrainpreschool.com">www.candibrainpreschool.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="widget">
                <h4 class="widget-title">Opening Hours</h4>
                <div class="opening-hours border-dark">
                  <ul>
                    <li class="clearfix"> <span> Mon - Tues : </span>
                      <div class="value"> 6.00 am - 10.00 pm </div>
                    </li>
                    <li class="clearfix"> <span> Wednes - Thurs :</span>
                      <div class="value"> 8.00 am - 6.00 pm </div>
                    </li>
                    <li class="clearfix"> <span> Fri :</span>
                      <div class="value"> 3.00 pm - 8.00 pm </div>
                    </li>
                    <li class="clearfix"> <span> Sun : </span>
                      <div class="value"> Closed </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="footer-bottom" data-tm-bg-color="#2A2A2A">
          <div class="container">
            <div class="row pt-20 pb-20">
              <div class="col-sm-6">
                <div class="footer-paragraph">
                  © 2023 Candibrain. All Rights Reserved.
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
