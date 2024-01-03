const galleryItemTemplate = document.createElement('template');
galleryItemTemplate.innerHTML = `
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

  <div class="isotope-item">
    <div class="isotope-item-inner">
        <div class="tm-gallery">
            <div class="tm-gallery-inner">
                <div class="thumb">
                    <a>
                        <img src="https://via.placeholder.com/350x265"
                            class="" alt="images" />
                    </a>
                </div>
                <div class="tm-gallery-content-wrapper">
                    <div class="tm-gallery-content">
                        <div class="tm-gallery-content-inner">
                            <div class="icons-holder-inner">
                                <div
                                    class="styled-icons icon-dark icon-circled icon-theme-colored1">
                                    <a class="lightgallery-trigger styled-icons-item"
                                        data-exthumbimage="images/shop/portfolio-sq2.jpg"
                                        title="photo"
                                        href="images/shop/portfolio-sq2.jpg"><i
                                            class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="title-holder">
                                <h5 class="title"><a href="#">Demo Gallery</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
`;

class GalleryItem extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(galleryItemTemplate.content.cloneNode(true));

        var isotope = document.querySelectorAll(".isotope-item");

        // console.log("isotope", isotope);
        isotope.forEach((each, index) => {
            var a = each.querySelectorAll('a')
            // var img = each.querySelector('img')
            // console.log("a", a[0].querySelector("img").src);
            a[0].querySelector("img").src = galleryData[index].image;
            a[1].href = galleryData[index].image;
            a[1].setAttribute('data-exthumbimage', galleryData[index].image);
        })

        // Add click event listeners to each <li> element

        // Attach click event listeners to handle link clicks
        // this.shadowRoot.getElementById('home').addEventListener('click', () => this.handleLinkClick('home'));
        // this.shadowRoot.getElementById('about').addEventListener('click', () => this.handleLinkClick('about'));
        // this.shadowRoot.getElementById('program').addEventListener('click', () => this.handleLinkClick('program'));
        // this.shadowRoot.getElementById('page').addEventListener('click', () => this.handleLinkClick('page'));
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="isotope-item">
        <div class="isotope-item-inner">
            <div class="tm-gallery">
                <div class="tm-gallery-inner">
                    <div class="thumb">
                        <a>
                            <img src="https://via.placeholder.com/350x265"
                                class="" alt="images" />
                        </a>
                    </div>
                    <div class="tm-gallery-content-wrapper">
                        <div class="tm-gallery-content">
                            <div class="tm-gallery-content-inner">
                                <div class="icons-holder-inner">
                                    <div
                                        class="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a class="lightgallery-trigger styled-icons-item"
                                            data-exthumbimage="images/shop/portfolio-sq2.jpg"
                                            title="photo"
                                            href="images/shop/portfolio-sq2.jpg"><i
                                                class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="title-holder">
                                    <h5 class="title"><a href="#">Demo Gallery</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `
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

customElements.define('gallery-item-component', GalleryItem);
