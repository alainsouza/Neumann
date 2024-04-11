import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import logo from "../../assets/logo.webp";
import video from "../../assets/videobackground.mp4";

const Header = () => {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal('.imageHeader', { duration: 2000, origin: 'bottom', distance: '150px'});
    }, []);

    return (
        <section id="header"  className="relative w-full h-screen flex justify-center items-center">
            <video autoPlay muted loop playsInline preload="none" className="w-full h-full object-cover absolute top-0 left-0 z-0" disablePictureInPicture>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative flex items-center justify-center w-full h-[full] z-10">
                <img src={logo} alt="icon" className="w-80 h-full lg:w-[32rem] object-cover pointer-events-none imageHeader"/>
            </div>
        </section>
    );
}

export default React.memo(Header);
