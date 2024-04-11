import React, { useEffect } from 'react';
import textura from "../../assets/textura.webp";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoNeumann from "../../assets/logoNeumann.webp";
import ScrollReveal from 'scrollreveal';

const Footer = () => {

  const whatsappNumber = 'https://api.whatsapp.com/send?phone=5561981789111&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20quero%20ter%20Neumann%20no%20meu%20evento!';

  useEffect(() => {
    ScrollReveal().reveal('.footer-item', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      interval: 150,
    });
  }, []);

  return (
    <footer className="bg-black text-white p-5 lg:px-10 lg:py-8 w-full h-auto" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
      <div className="lg:flex justify-between items-start container mx-auto max-w-[2500px]">
        <div className="lg:text-left flex flex-col gap-3 lg:w-96 footer-item">
          <h1 className='text-2xl lg:text-xl font-bold '>Fábrica</h1>
          <p className='text-lg lg:text-lg font-bold'>Endereço: </p>
          <p className='text-lg lg:text-lg'>Fábrica: Rodovia BR-020 km 16 N. Rural Córrego do Arrozal Ch., 150A – Planaltina. Brasília/DF - CEP: 73007-995</p>
          <p className='text-lg lg:text-lg font-bold'>Depósito: </p>
          <p className='text-lg lg:text-lg'>Rua do Alojamento, 6A – Vila Planalto Brasília/DF – CEP: 70804-090</p>

          <p className='text-lg lg:text-lg font-bold'>Telefone: </p>
          <p className='text-lg lg:text-lg'>(61) 98178-9111</p>
        </div>

        <div className="lg:text-left flex flex-col mt-10 lg:mt-0 footer-item">
          <h1 className='text-2xl lg:text-xl font-bold mb-4'>Navegue</h1>
          <ul className='flex flex-col gap-4'>
            <li className='text-lg lg:text-lg'><a href="#sobre">Sobre</a></li>
            <li className='text-lg lg:text-lg'><a href="#produtos">Produtos</a></li>
            <li className='text-lg lg:text-lg'><a href="#calculadora">Calculadora</a></li>
            <li className='text-lg lg:text-lg'><a href="#fotos">Fotos</a></li>
            <li className='text-lg lg:text-lg'><a href="#perguntas">Perguntas</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 mt-10 lg:mt-0 footer-item'>
          <h1 className='text-2xl lg:text-xl font-bold '>Produtos</h1>
          <p className='text-lg lg:text-lg'> <a href="#produto1">Chopp Pilsen</a></p>
          <p className='text-lg lg:text-lg'><a href="#produto2">Chopp Session IPA</a></p>
          <p className='text-lg lg:text-lg'> <a href="#produto3">Chopp IPA</a></p>
        </div>

        <div className='flex flex-col justify-center items-center mt-10 lg:mt-0 footer-item'>
          <img className='w-52 h-auto mb-8' src={logoNeumann} alt="Ícone" />
          <div className='flex gap-10'>
            <a className='text-4xl' href="https://www.instagram.com/neumannbier" ><FaInstagram /></a>
            <a className='text-4xl' href={whatsappNumber} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
