import React, { useEffect } from "react";
import "./scrollReveal.css";
import ScrollReveal from "scrollreveal";

import textura from "../../assets/textura.webp";
import photoAbout from "../../assets/neumannabout.webp";

const About = () => {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal('.imageAbout', { duration: 2000, origin: 'left', distance: '150px'});
        sr.reveal('.textAbout', { duration: 2000, origin: 'right', distance: '150px'});
    }, []);

    return (
        <section id="sobre" className="lg:w-full h-full justify-center items-center overflow-hidden" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
            <div className="flex flex-col lg:flex lg:flex-row w-full h-full py-14 lg:px-28 lg:py-44 justify-center items-center container mx-auto max-w-[2500px]" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
                <div className="imageAbout flex lg:w-1/2 justify-center items-center">
                    <img src={photoAbout} alt="about" className="w-11/12 h-54 lg:w-2/3 lg:h-54 sr imageAbout"/>
                </div>

                <div className="mt-10 flex flex-col lg:w-1/2 justify-center items-center lg:mt-0 sr textAbout">
                    <div className="textAbout px-5 text-white lg:px-0">
                        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl  font-bold">
                            UMA CERVEJARIA DE TRADIÇÃO, DESDE 1885!
                        </h1>

                        <p className="mt-5 text-lg 2xl:text-xl xl:mt-10 ">
                            A Família Neumann iniciou sua produção de cervejas em
                            1885, fabricando a cerveja "Colonial" na
                            cidade de Petrópolis, que durou até 1930.
                        <br/><br/>

                            Em 2018, Marcos Neumann, reiniciou o ciclo de
                            produção de cervejas de forma artesanal caseira,
                            produzindo diversos estilos, obedecendo a lei da pureza
                            alemã, que determina que a cerveja deverá ser
                            elabora apenas com água, malte, lúpulo e levedura.

                        <br/><br/>

                            Devido a alta qualidade de suas cervejas, familiares e
                            amigos incentivaram uma produção maior,
                            transformando uma cervejaria caseira em uma
                            cervejaria profissional, sem perder a essência e
                            qualidade de uma boa cerveja artesanal.

                        <br/><br/>
                            Seguindo todos os rigorosos procedimentos sanitários
                            para comercialização, a cerveja Neumann vai te
                            surpreender! Impossível tomar apenas um copo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(About);
