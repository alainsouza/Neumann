import React, { useState, useEffect, useRef } from "react";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiAlignJustify, FiX } from "react-icons/fi";
import icon from "../../assets/logoNeumann.webp";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const whatsappNumber = 'https://api.whatsapp.com/send?phone=5561981789111&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20quero%20ter%20Chopp%20Neumann%20no%20meu%20evento!';

    return (
        <section id="navBar">
            {/* MOBILE */}
            <nav className="w-full flex items-center justify-between py-2 px-4 absolute top-0 lg:hidden bg-gray-dark" style={{ zIndex: 49 }}>
                <img src={icon} alt="icon" className="w-10 h-auto" />
                {
                    menuOpen ? (
                        <FiX
                            className="text-white text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <FiAlignJustify
                            className="text-white text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl cursor-pointer"
                            onClick={toggleMenu}
                            />
                    )
                }
                
                {menuOpen && (
                    <div ref={menuRef} className="absolute top-12 left-0 w-full bg-gray-dark text-white py-4 shadow-lg" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <ul className="flex flex-col items-start px-5 gap-4">
                        
                            <a href="#sobre" className="text-lg hover:text-gray-400 transition-colors duration-300 bg-[#383535] p-3 w-full rounded-md" onClick={handleItemClick}>
                                <li className=" ">
                                    Sobre
                                </li>
                            </a>
                        
                            <a href="#produtos" className="text-lg hover:text-gray-400 transition-colors duration-300 bg-[#383535] p-3 w-full rounded-md" onClick={handleItemClick}>
                                <li className=" ">
                                    Produtos
                                </li>
                            </a>
                        
                        
                            <a href="#calculadora" className="text-lg hover:text-gray-400 transition-colors duration-300 bg-[#383535] p-3 w-full rounded-md" onClick={handleItemClick}>
                                <li className="">
                                    Calculadora
                                </li>
                            </a>
                        
                        
                            <a href="#fotos" className="text-lg hover:text-gray-400 transition-colors duration-300 bg-[#383535] p-3 w-full rounded-md" onClick={handleItemClick}>
                                <li className="">
                                    Fotos
                                </li>
                            </a>
                        
                        
                            <a href="#perguntas" className="text-lg hover:text-gray-400 transition-colors duration-300 bg-[#383535] p-3 w-full rounded-md" onClick={handleItemClick}>
                                <li className="">
                                    Perguntas
                                </li>
                            </a>
                        
                        <div className="flex justify-around mt-6 gap-6">
                            <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com/neumannbier" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </ul>
                    </div>
                )}
            </nav>


            {/* DESKTOP */}
            <nav className="hidden lg:flex lg: bg-gray-dark px-10 z-50">
                <div className="flex lg:items-center justify-between container mx-auto max-w-[2500px] bg-gray-dark px-10 py-5 z-50">
                    {/* Logo */}
                <div className="flex items-center">
                    <img src={icon} alt="icon" className="w-14 h-auto object-cover" />
                </div>

                {/* Menu */}
                <div>
                    <ul className="flex justify-center space-x-10">
                        <li className="cursor-pointer text-xl hover:text-gold">
                            <a href="#sobre" className="text-white text-xl hover:text-gold-light">Sobre</a>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gold">
                            <a href="#produtos" className="text-white text-xl hover:text-gold-light">Produtos</a>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gold">
                            <a href="#calculadora" className="text-white text-xl hover:text-gold-light">Calculadora</a>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gold">
                            <a href="#fotos" className="text-white text-xl hover:text-gold-light">Fotos</a>
                        </li>
                        <li className="cursor-pointer text-xl hover:text-gold">
                            <a href="#perguntas" className="text-white text-xl hover:text-gold">Perguntas</a>
                        </li>
                    </ul>
                </div>

                {/* Ícones */}
                <div className="flex items-center gap-2">
                    <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white hover:text-gold-light" />
                    </a>

                    <a href="https://www.instagram.com/neumannbier" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="text-4xl mx-2 lg:mx-4 cursor-pointer text-white hover:text-gold-light" />
                    </a>
                </div>
                </div>
            </nav>
        </section>
    );
}

export default React.memo(NavBar);
