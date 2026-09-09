// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {

    const wrapperElement = document.querySelector("body");
    if (wrapperElement) {
        wrapperElement.insertAdjacentHTML("beforeend", footerEl)
    }
    const headerElement = document.querySelector("#headerwrap");
    if (headerElement) {
        headerElement.insertAdjacentHTML("afterbegin", headerEl)
    }
    // Inserting sidebars:
    const contentElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
    if (contentElement) {
      contentElement.insertAdjacentHTML("afterbegin", sidebarEl1);
    }

    initActiveLinks();
    //title to h1 
   const pageTitle = document.title;
                    const h1Element = document.querySelector('h1');

                    if (h1Element) {
                        h1Element.textContent = pageTitle;
                    }
    //sidebar img randomizer
    const imageArray = [
                        "/assets/imgs/meme/borntowork.png",
                        "/assets/imgs/meme/letsdoourbestthisweek.png",
                        "/assets/imgs/meme/orvpropaganda_pixeled.jpg",
                        "/assets/imgs/meme/yjh_lockin.jpg",
                        "/assets/imgs/meme/yaoimotive.jpg",
                        "/assets/imgs/meme/theworkisalreadydone.jpg",
                        "/assets/imgs/meme/urchineseisbad.jpg",
                        "/assets/imgs/meme/kdj_lockin.jpg",
                        "/assets/imgs/meme/bitchgraduate.jpg",
                        "/assets/imgs/meme/locktfingodrawsomethingmakeuroshihappy.jpg",
                        "/assets/imgs/meme/neverkys.jpg",
                        "/assets/imgs/meme/bossmakesadollarimakeadimethatswhyidrawyaoioncompanytime.jpg",
                        "/assets/imgs/meme/youryaoiaintcheap.jpg",
                        "/assets/imgs/meme/quittingisnotacceptable.jpg",
                        "/assets/imgs/meme/haraurara_youmiss100oftheshotsudonttake.jpg",
                        "/assets/imgs/meme/workharderustupidermin.jpg",
                    ];

                    const image = document.querySelector(".ad");

                    window.onload = () => generateRandomPicture(imageArray);

                    function generateRandomPicture(array) {
                        let randomNum = Math.floor(Math.random() * array.length);
                        image.setAttribute("src", array[randomNum]);
                    }
  }

  
);

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
                
const headerEl = `
	<header>
            <h1></h1>
	</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
    <div id="calwrapper">
        <fieldset style="padding:0px;border:0;margin:0px;">
            <legend><a href="http://calendar-muryou.com/" style="color:hotpink;text-decoration: none;font-size:9pt;"
                    target="_blank" rel="nofollow"></a></legend><iframe
                src="https://calendar.sakura.ne.jp/blog_cal.html" scrolling="no"
                style="background-color:#fbe;padding:0px;border:0;margin:0px;overflow:hidden;width:172px;height:636px;overflow:hidden;"></iframe>
    </div>
    <img style="position: fixed; bottom: 0px; right: 0px; width: 20vw; cursor:grab;" src="/assets/imgs/wandere_chibi_studying-pixeled.png">
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.

const sidebarEl1 = `
	<aside>
		<ul>
                    <li class="navsection">Portfolio
                        <ul>
                            <li><a href="/portfolio/index.html">Sitemap</a></li>
                            <li><a href="">Art Gallery</a></li>
                        </ul>
                    </li>
                    <li class="navsection">Learning Plan
                        <ul>
                            <li><a href="/portfolio/vision.html">Vision</a></li>
                            <li><a href="/portfolio/goal/index.html">Goals</a></li>
                            <li><a href="/portfolio/project/index.html">Projects</a></li>
                        </ul>
                    </li>
                </ul>
                <img src="" class="ad">
	</aside>
`;