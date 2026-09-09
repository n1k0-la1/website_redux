class BreadcrumbTrail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                    <li>
                        <span class="breadcrumb-trail_sections"><b>Sitely:</b>──────╮</span>
                    </li>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li><a href="abtme.html">About Me</a>
                        <span style="font-size: 75%; color: crimson"><i>up!</i></span></li>
                    <li><a href="sitemap.html"><s>Sitemap</s></a></li>
                    <li><a href="credits.html">Credits</a>
                    <li>
                        <span class="breadcrumb-trail_sections"><b>Blogs:</b>──────╮</span>
                    </li>
                    <li><a href="/art/index.html">Art Gallery</a>
                        <span style="font-size: 75%; color: crimson"><i>up!</i></span></li>
                    <li>
                        <a href="blog.html">Diary</a>
                    </li>
                    <li>
                        <span class="breadcrumb-trail_sections"><b>Showcase:</b>────╮</span>
                    </li>
                    <li><a href=""><s>Dolls</s></a>
                    <span style="font-size: 75%; color: crimson"><i>coming soon!</i></span></li>
                    <li>
                        <span class="breadcrumb-trail_sections"><b>Silly Things:</b>───╮</span>
                    </li>
                    <li>
                        <a href="https://nik0la1.atabook.org/" target="_blank">Guestbook</a>
                    </li>
            </ul>
            <a href="https://www.mangaupdates.com/series/zjsl68m/i-failed-to-oust-the-villain"><img src="/assets/deco/banner_ifailedtooustthevillain_20_.jpg" style="display: block; width: 95%; margin-left: auto; margin-right: auto; margin-top: 5px;"></a>
            <iframe width="185px" height="185px" style="border:none; display: block; margin-left: auto; margin-right: auto; margin-top: 5px;" src="https://dimden.neocities.org/navlink/" name="neolink"></iframe>
            <a href="https://www.acbjd.com/xiao-chu-fullset-p-20014.html?cPath=327_328" target="_blank"><img src="/assets/deco/bannerad_dollzone_xiaochu_sale_pixeled.jpg" style="display: block; width: 95%; margin-left: auto; margin-right: auto; margin-top: 5px;" alt="please buy me this doll i'm begging you im so broke"></a>    
            <iframe width="185" height="555" style="border:none;  display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom:5px;" src="https://dogspit.nekoweb.org/sidelink.html" name="sidelink"></iframe>
            `;
    }
}
customElements.define('breadcrumb-trail', BreadcrumbTrail);