import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import parallax from "../../assets/parallax.webp";
import chopp from "../../assets/barril.webp";
import iconCerveja from "../../assets/icons8-beer-96.webp";
import ibu from "../../assets/amargor.webp";

const Products = () => {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal('.titleProduct', { duration: 1000, origin: 'bottom', delay: 50 });
        sr.reveal('.product1', { duration: 1000, origin: 'bottom', delay: 100 });
        sr.reveal('.product2', { duration: 1000, origin: 'bottom', delay: 150 });
        sr.reveal('.product3', { duration: 1000, origin: 'bottom', delay: 250 });
    }, []);
    
    const whatsappNumber = 'https://api.whatsapp.com/send?phone=5561981789111&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20quero%20ter%20Chopp%20Neumann%20no%20meu%20evento!';

    return (
        <section id="produtos" className="flex flex-col py-10 relative" style={{ backgroundImage: `url(${parallax})`, backgroundSize: 'contain' }}>
            <div className="px-5 lg:flex flex-col lg:px-28 container mx-auto max-w-[2500px]">
                <div className="flex justify-center ">
                    <h1 className="titleProduct text-2xl lg:text-4xl 2xl:text-5xl text-center w-full px-5 lg:w-2/5 lg:text-center font-bold" style={{ color: '#282828' }}>
                    Chopp Neumann para seus eventos e suas festas
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    <div id="produto1" className="product1 bg-gold-light rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-52 lg:w-80 lg:h-auto  pointer-events-none"/>
                            
                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Chopp Pilsen
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    Puro Malte
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                Cerveja clara e leve, com baixo amargor e teor alcoólico, ressaltando as notas do puro malte.
                                </p>

                                <div className="flex flex-col pt-8">
                                    <div className="flex">
                                        <img src={iconCerveja} className="w-12 h-12 object-cover" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">ABV</h4>
                                            <h4 className="text-lg lg:text-xl">Teor Alcóolico</h4>
                                            <h4 className="text-lg lg:text-xl">4,6%</h4>
                                        </div>
                                    </div>
                                    
                                    <div className="flex pt-8">
                                        <img src={ibu} className="w-12 h-12 object-cover mb-2" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">IBU</h4>
                                            <h4 className="text-lg lg:text-xl">Amargor</h4>
                                            <h4 className="text-lg lg:text-xl">15</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-10 ">
                            <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center justify-center w-auto h-auto p-4 px-8 rounded-lg border border-black shadow-2xl text-sm lg:text-lg text-center transition duration-300 ease-in-out hover:scale-110">
                                    EU QUERO
                                </button>
                            </a>
                        </div>
                    </div>

                    <div id="produto2" className="product2 bg-[#70ad47] rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-52 lg:w-80 lg:h-auto  pointer-events-none"/>
                            
                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Chopp Session IPA
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    Lupulada
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                    Cerveja com aromas cítricos e frutas amarelas, mas com características que uma Session traz, a leveza com amargor médio e baixo teor alcoólico.
                                </p>

                               <div className="flex flex-col pt-8">
                                    <div className="flex">
                                        <img src={iconCerveja} className="w-12 h-12 object-cover" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">ABV</h4>
                                            <h4 className="text-lg lg:text-xl">Teor Alcóolico</h4>
                                            <h4 className="text-lg lg:text-xl">5,2%</h4>
                                        </div>
                                    </div>
                                    
                                    <div className="flex pt-8">
                                        <img src={ibu} className="w-12 h-12 object-cover mb-2" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">IBU</h4>
                                            <h4 className="text-lg lg:text-xl">Amargor</h4>
                                            <h4 className="text-lg lg:text-xl">25</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-10 ">
                            <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center justify-center lg:w-auto lg:h-auto p-4 px-8 rounded-lg border border-black shadow-2xl text-sm lg:text-lg  text-center transition duration-300 ease-in-out hover:scale-110">
                                    EU QUERO
                                </button>
                            </a>
                        </div>
                    </div>

                    <div id="produto3" className="product3 bg-[#ed7d31] rounded-lg flex flex-col items-center py-10 sr">
                        <div className="px-5 flex flex-col items-center lg:px-10 flex-grow">
                            <img src={chopp} alt="chopp" className="w-52 lg:w-80 lg:h-auto  pointer-events-none"/>

                            <div className="flex flex-col pt-10">
                                <h2 className="text-xl lg:text-2xl font-bold">
                                    Chopp IPA
                                </h2>
                                <h3 className="text-xl lg:text-2xl" style={{ fontWeight: 400 }}>
                                    Extremamente Lupulada
                                </h3>
                                <p className="text-lg lg:text-xl pt-5" style={{ fontWeight: 400 }}>
                                Cerveja com fortes aromas cítricos e frutas amarelas, imponente como toda IPA deve ser. Forte amargor e maior teor alcóolico que remete ao equilíbrio dessa cerveja.
                                </p>
                                
                                <div className="flex flex-col pt-8">
                                    <div className="flex">
                                        <img src={iconCerveja} className="w-12 h-12 object-cover" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">ABV</h4>
                                            <h4 className="text-lg lg:text-xl">Teor Alcóolico</h4>
                                            <h4 className="text-lg lg:text-xl">5,7%</h4>
                                        </div>
                                    </div>
                                    
                                    <div className="flex pt-8">
                                        <img src={ibu} className="w-12 h-12 object-cover mb-2" alt="icon"/>
                                        
                                        <div className="flex flex-col ml-5">
                                            <h4 className="text-xl font-bold">IBU</h4>
                                            <h4 className="text-lg lg:text-xl">Amargor</h4>
                                            <h4 className="text-lg lg:text-xl">35</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center pt-10 ">
                            <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center justify-center lg:w-auto lg:h-auto p-4 px-8 rounded-lg border border-black shadow-2xl text-sm lg:text-lg  text-center transition duration-300 ease-in-out hover:scale-110">
                                    EU QUERO
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Products);
