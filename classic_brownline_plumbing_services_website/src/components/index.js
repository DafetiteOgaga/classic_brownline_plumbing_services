import { useState, useEffect, Fragment } from "react";
import { titleCase } from "../hooks/changeCase";
import { Spinner } from "../hooks/spinner";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import { Carousel } from "./carousel";
import { ContactUs } from "./contact";
import { ServiceHero } from "./serviceHero";
import { About } from "./about";
import { Facts } from "./facts";
import { Service } from "./service";
import { Booking } from "./booking";
import { Technicians } from "./technicians";
import { Testimonial } from "./testimonials";
import { Footer } from "./footer";
// import OwlCarousel from "react-owl-carousel2";

const yearFounded = 2010
const currentYear = new Date().getFullYear();

function Index() {
    const [isLoading, setIsLoading] = useState(true);
    // header
    const [isSticky, setIsSticky] = useState(false);
    const [menuHeadInserted, setMenuHeadInserted] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [tagText, setTagText] = useState('');
    const [staleTag, setStaleTag] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    
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
            console.log("menuHeadInserted true");
            const topbar = document.getElementById("home");
            console.log({topbarHeight: topbar.offsetHeight});
            const dynamicNavbar = document.getElementById("dynamic-navbar");
            console.log({dynamicNavbarHeight: dynamicNavbar.offsetHeight});
            const tempHero = document.getElementById(tagText.toLowerCase());
            console.log({tempHeroHeight: tempHero.offsetHeight});
            const maxHeadHeight = tempHero.offsetHeight +
                                    // topbar.offsetHeight +
                                    dynamicNavbar.offsetHeight;
            console.log({
                maxHeadHeight,
                scrollY,
                tempHeroHeight: tempHero.offsetHeight,
                topbarHeight: topbar.offsetHeight,
                wholeHeader: topbar.offsetHeight + dynamicNavbar.offsetHeight,
                dynamicNavbarHeight: dynamicNavbar.offsetHeight,
            });
            console.log({scrollY, maxHeadHeight, staleTag});
            if (scrollY > maxHeadHeight && !staleTag) {
                console.log("scrollY > tempHero.offsetHeight");
                console.log({scrollY, maxHeadHeight});
                setMenuHeadInserted(false);
                setActiveSection("");
            }
        }
    }, [scrollY])


    const handleNavigationScroll = (e, idTag) => {
        e.preventDefault();
        console.log({idTag})
        if (!idTag) return ''
        if (idTag.toLowerCase() === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuHeadInserted(false);
            setActiveSection("");
            return;
        }
        setActiveSection(idTag.toLowerCase());
        setTagText(idTag);
        setMenuHeadInserted(true);
        setStaleTag(true);

        // checks foe element in dom then scroll into view
        const checkExist = setInterval(() => {
            const target = document.getElementById(idTag);
            console.log('checking...', {target});
            if (target) {
                console.log('found target:', target);
                clearInterval(checkExist); // stop checking once found
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                // setStaleTag(false);
            }
        }, 50);
    }

    // testimonials
    

    // // fact
    // const CounterUp = ({ value, duration = 800, className = "" }) => {
    //     const count = useCounterUp(value, duration);
    //     return (
    //       <span className={`counter-up ${className}`}>
    //         {count.toLocaleString()}
    //       </span>
    //     );
    // };
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
    const renderSection  = ['services', 'booking', 'technicians', 'testimonials',].includes(activeSection)
    const renderServices = ['', 'about-us', 'services',].includes(activeSection)
    const renderBooking = ['', 'about-us', 'services', 'booking',].includes(activeSection)
    const renderTechnicians = ['', 'about-us', 'services', 'booking', 'technicians',].includes(activeSection)
    const renderTestimonials = ['', 'about-us', 'services', 'booking', 'technicians', 'testimonials',].includes(activeSection)
    const renderContact = activeSection === 'contact'
    // console.log({scrollY, menuHeadInserted, activeSection});
    // console.log({
    //     menuHeadInserted,
    //     // activeSection,
    //     // renderSection,
    //     // renderServices,
    //     // renderBooking,
    //     // renderTechnicians,
    //     // renderTestimonials,
    // });
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

                {renderContact &&
                <ContactUs />}

                {/* Service-hero */}
                <ServiceHero
                renderSection={renderSection} />

                {/* About */}
                <About
                renderSection={renderSection}
                yearFounded={yearFounded} />

                {/* Fact */}
                <Facts renderSection={renderSection} />

                {/* Service */}
                <Service
                renderServices={renderServices}
                yearFounded={yearFounded}
                currentYear={currentYear} />

                {/* Booking */}
                <Booking renderBooking={renderBooking} />

                {/* Team */}
                <Technicians
                renderTechnicians={renderTechnicians}
                activeSection={activeSection} />

                {/* Testimonial */}
                <Testimonial />

                {/* Footer */}
                <Footer />

                {/* Back to Top --> */}
                <a href="#home" className="btn btn-lg btn-primary btn-lg-square border-radius-5 back-to-top"><i className="fa fa-arrow-up"></i></a>
            </div>}
        </>
    )
}
export { Index}