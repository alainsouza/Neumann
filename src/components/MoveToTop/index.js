import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function MoveToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ transition: "opacity 0.5s ease", opacity: showButton ? 1 : 0 }}>
      {showButton && (
        <div className="bg-gold-light w-12 h-12 lg:w-14 lg:h-14 fixed rounded-full bottom-8 right-8 lg:bottom-14 lg:right-14 flex justify-center items-center z-50">
          <a href="#navBar">
            <FiChevronUp className="text-4xl text-gray-600" />
          </a>
        </div>
      )}
    </section>
  );
}
