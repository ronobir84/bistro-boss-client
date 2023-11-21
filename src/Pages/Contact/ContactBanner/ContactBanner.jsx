import img from "../../../assets/contact/banner.jpg"
import { Parallax, Background } from 'react-parallax';
const ContactBanner = () => {


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
    requestIdleCallback(function () {
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";
    });

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
            $(".tab-item.active").classList.remove("active");
            $(".tab-pane.active").classList.remove("active");

            line.style.left = this.offsetLeft + "px";
            line.style.width = this.offsetWidth + "px";

            this.classList.add("active");
            pane.classList.add("active");
        };
    });


    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the Menu"
            strength={-200}
        >
            <div>
                <div className="hero  min-h-screen ">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-4xl bg-black bg-opacity-40  lg:px-[250px] px-[90px] py-8 lg:py-16 ">
                            <h1 id="style-font" className="mb-5 lg:text-[60px] text-[35px] text-white font-bold">CONTACT US</h1>
                            <p id="style-font" className="mb-5 text-white text-lg ">Would you like to try a dish?</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default ContactBanner;