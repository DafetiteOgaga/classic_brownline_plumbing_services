import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../hooks/spinner";
import { Topbar } from "./modularComponents/topbar";
import { Navbar } from "./modularComponents/navbar";
import { Footer } from "./modularComponents/footer";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useDeviceInfo } from "../hooks/deviceType";

// topbar, nav, carouse, services, fact, booking, gallery, testimonial, footer
const yearFounded = 2010
const currentYear = new Date().getFullYear();
const address = "1 Akinbosoye Avenue, Ipaja, Lagos State, Nigeria."
const phoneNumber1 = "+234 222 3333 444";
const email = "info@classic-brownline.com"
const siteName = "Classic Brownline"
const formEmail = "ogagadafetite@gmail.com" // "brownfoluke@gmail.com"

function Index() {
    const isHome = useLocation().pathname === "/"
	// console.log({isHome});
    const deviceMediaWidth = useDeviceInfo().width;
    const isMobileDevice = deviceMediaWidth <= 768;
    const [isLoading, setIsLoading] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [carouselReady, setCarouselReady] = useState(false);
    // console.log({deviceMediaWidth, isMobileDevice, scrollY});

    useEffect(() => {
        const handleScroll = () => {
            const updatedScrollY = window.scrollY;
            setScrollY(updatedScrollY); // update scrollY state
            // // remove head when scrolling down
            if (updatedScrollY > 10) {
                setIsSticky(true);
            } else {
                // show head when scrolling up (to top)
                setIsSticky(false);
            }
        };
        // event listener
        window.addEventListener("scroll", handleScroll);
        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleNavigationScroll = (e=null, idTag, data=null) => {
        if (e) e.preventDefault();
        // console.log({idTag})
        if (!idTag) return ''

        // checks foe element in dom then scroll into view
        const checkExist = setInterval(() => {
            const target = document.getElementById(idTag);
            // console.log('checking...', {target});
            if (target) {
                // console.log('found target:', target);
                clearInterval(checkExist); // stop checking once found
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 50);
    }

    useEffect(() => {
        const handlePageLoad = () => setIsLoading(false);

        // If page is already loaded (fast browser cache)
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }
        return () => window.removeEventListener('load', handlePageLoad);
    }, []);

    let showSpinner = isLoading || !carouselReady;
    if (!isHome) {
        showSpinner = false;
    }

    // console.log({
    //     isLoading,
    //     carouselReady,
    //     showSpinner
    //     // scrollY
    // })
    return (
        <>
            {/* Spinner */}
            <Spinner isLoading={showSpinner} />

            {
            <div className="layout-container app-bg-color" id="page-top">
                {/* Topbar */}
                <Topbar />

                {/* Navbar */}
                <Navbar
                isSticky={isSticky}
                scrollY={scrollY} />

                <div className="main-content">
                    <Outlet context={{
                    onCarouselLoaded: () => setCarouselReady(true),
                    yearFounded,
                    currentYear,
                    address,
                    email,
                    phoneNumber1,
                    siteName,
                    // scrollY,
                    }}/>
                </div>

                {/* Footer */}
                <Footer
                address={address}
                email={email}
                siteName={siteName}
                phoneNumber1={phoneNumber1} />

                {/* Back to Top --> */}
                {scrollY>1000 ?
                <Link to="#"
                onClick={(e)=>{
                    handleNavigationScroll(e, "page-top");
                }}
                className="btn btn-lg btn-primary-color btn-lg-custom border-radius-5 back-to-top dual-arrow-back-to-top">
                    <i className="fa fa-arrow-up"></i>
                </Link>
                :null}
            </div>}
        </>
    )
}
export { Index, siteName, formEmail }