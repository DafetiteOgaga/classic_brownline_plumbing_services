import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../hooks/spinner";
import { Topbar } from "./modularComponents/topbar";
import { Navbar } from "./modularComponents/navbar";
import { Carousel } from "./modularComponents/carousel";
import { ContactUs } from "./modularComponents/contact";
import { About } from "./modularComponents/about";
import { Booking } from "./modularComponents/booking";
import { Gallery } from "./modularComponents/gallery";
import { Footer } from "./modularComponents/footer";
import { HomeComponent } from "./homeComponent";
import { ServiceComponent } from "./serviceComponent";
import { ServiceDetail } from "./modularComponents/serviceDetails";
import { TestimonialComponent } from "./testimonialComponent";

const yearFounded = 2010
const currentYear = new Date().getFullYear();
const address = "1 Akinbosoye Avenue, Ipaja, Lagos State, Nigeria."
const phoneNumber1 = "+234 222 333 4444";
const email = "info@classic-brownline.com"
const REPO_PREFIX = "/classic_brownline_plumbing_services";

function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [menuHeadInserted, setMenuHeadInserted] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [tagText, setTagText] = useState('');
    const [staleTag, setStaleTag] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    const [serviceData, setServiceData] = useState(null);

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
    useEffect(() => {
        if (menuHeadInserted) {
            // console.log("menuHeadInserted true");
            // const topbar = document.getElementById("home");
            // console.log({topbarHeight: topbar.offsetHeight});
            const dynamicNavbar = document.getElementById("dynamic-navbar");
            // console.log({dynamicNavbarHeight: dynamicNavbar.offsetHeight});
            const tempHero = document.getElementById(tagText.toLowerCase());
            // console.log({tempHeroHeight: tempHero.offsetHeight});
            const maxHeadHeight = tempHero.offsetHeight +
                                    // topbar.offsetHeight +
                                    dynamicNavbar.offsetHeight;
            // console.log({
            //     maxHeadHeight,
            //     scrollY,
            //     tempHeroHeight: tempHero.offsetHeight,
            //     topbarHeight: topbar.offsetHeight,
            //     wholeHeader: topbar.offsetHeight + dynamicNavbar.offsetHeight,
            //     dynamicNavbarHeight: dynamicNavbar.offsetHeight,
            // });
            // console.log({scrollY, maxHeadHeight, staleTag});
            if (scrollY > maxHeadHeight && !staleTag) {
                console.log("scrollY > tempHero.offsetHeight");
                console.log({scrollY, maxHeadHeight});
                setMenuHeadInserted(false);
                setActiveSection("");
            }
        }
    }, [scrollY])

    const handleNavigationScroll = (e=null, idTag, data=null) => {
        if (e) e.preventDefault();
        console.log({idTag})
        if (!idTag) return ''

        // Push to history (clean URL, no hash)
        const path = idTag.toLowerCase() === "home" ? "/" : `/${idTag.toLowerCase()}`;
        const url = `${REPO_PREFIX}${path}`;
        window.history.pushState({ idTag, data }, "", url);

        if (idTag.toLowerCase() === 'home') {
            console.log('navigating to home')
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuHeadInserted(false);
            setActiveSection("");
            setTagText("")
            return;
        }

        setServiceData(data);
        setActiveSection(idTag.toLowerCase());
        setTagText(idTag);
        setMenuHeadInserted(true);
        setStaleTag(true);

        // checks foe element in dom then scroll into view
        const checkExist = setInterval(() => {
            const target = document.getElementById(idTag);
            // console.log('checking...', {target});
            if (target) {
                // console.log('found target:', target);
                clearInterval(checkExist); // stop checking once found
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                // setStaleTag(false);
            }
        }, 50);
    }

    // Listen to back/forward buttons
    useEffect(() => {
        // console.log("Setting up popstate listener");
        const onPopState = (event) => {
            // console.log("Pop state event:");
            const state = event.state;
            // console.log("onPopState:", {state});
            if (state?.idTag) {
                // console.log("Handling popstate navigation to:", state.idTag);
                // Call your existing function automatically
                handleNavigationScroll(null, state.idTag, state.data);
            } else {
                // console.log("Handling popstate navigation to home");
                // Default fallback
                handleNavigationScroll(null, "home");
            }
        };
        window.addEventListener("popstate", onPopState);

        // Cleanup
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

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
    // console.log({scrollY, menuHeadInserted, activeSection});
    // console.log({
    //     // menuHeadInserted,
    //     // activeSection,
    //     // renderSection,
    //     // renderServices,
    //     // renderBooking,
    //     // renderTechnicians,
    //     // renderTestimonials,
    // });
    // console.log("Rendering Index component", handleNavigationScroll);
    return (
        <>
            {/* Spinner */}
            <Spinner isLoading={isLoading} />

            {!isLoading &&
            <div className="app-bg-color">
                {/* Topbar */}
                <Topbar />

                {/* Navbar */}
                <Navbar
                activeSection={activeSection}
                handleNavigationScroll={handleNavigationScroll}
                isSticky={isSticky} />

                {/* Carousel */}
                <Carousel
                tagText={tagText}
                handleNavigationScroll={handleNavigationScroll}
                menuHeadInserted={menuHeadInserted} />

                {/* home */}
                {activeSection==='' &&
                <HomeComponent
                handleNavigationScroll={handleNavigationScroll}
                yearFounded={yearFounded}
                currentYear={currentYear}
                activeSection={activeSection} />}

                {activeSection==='contact' &&
                <ContactUs address={address}
                email={email} />}

                {/* Service-hero */}
                {/* <ServiceHero /> */}

                {/* About */}
                {activeSection==='about' &&
                <About
                yearFounded={yearFounded}
                currentYear={currentYear} />}

                {/* Fact */}
                {/* <Facts /> */}

                {/* Service */}
                {activeSection==='services' &&
                <ServiceComponent
                handleNavigationScroll={handleNavigationScroll}
                yearFounded={yearFounded}
                currentYear={currentYear} />}

                {/* service-details */}
                {activeSection==='service-details' &&
                <ServiceDetail
                serviceData={serviceData} />}

                {/* Booking */}
                {activeSection==='booking' &&
                <Booking />}

                {/* Team */}
                {activeSection==='gallery' &&
                <Gallery
                activeSection />}

                {/* Testimonial */}
                {activeSection==='testimonials' && <TestimonialComponent />}

                {/* Footer */}
                <Footer
                address={address}
                email={email}
                phoneNumber1={phoneNumber1} />

                {/* Back to Top --> */}
                <a href="##"
                onClick={(e)=>{
                    handleNavigationScroll(e, 'home');
                }}
                className="btn btn-lg btn-primary-color btn-lg-custom border-radius-5 back-to-top"><i className="fa fa-arrow-up"></i></a>
            </div>}
        </>
    )
}
export { Index}