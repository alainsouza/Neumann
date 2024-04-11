import React, { useState, useEffect, useRef } from 'react';
import maqChopp from "../../assets/fotos-neumann-5.webp";
import { useInView } from 'react-intersection-observer';
import ScrollReveal from 'scrollreveal';

const questions = [
  {
    question: "A cerveja Neumann é puro malte?",
    answer: "Todas nossas cervejas são feitas apenas com Malte, Lúpulo, Levedura e Água. Não utilizamos nenhum adjunto como açúcar ou milho. Então a resposta é sim! Todas nossas cervejas são puro malte."
  },
  {
    question: "Posso comprar um barril para qualquer tipo de evento?",
    answer: "Sim! Atendemos a confraternizações, aniversários, casamentos, eventos públicos e privados de qualquer tamanho."
  },
  {
    question: "O que vem no kit para meu evento?",
    answer: "Enviamos uma Chopeira Elétrica, os Barris de Chopp e o Cilindro de Gás que empurra a cerveja do barril para o copo. Caso seu evento seja em local que não possui energia elétrica, não tem problema, enviamos uma Chopeira à Gelo que funciona perfeitamente para servir seu chopp geladíssimo."
  },
  {
    question: "Estou em dúvida na quantidade de chopp para meu evento, como faço o cálculo?",
    answer: "Você poderá utilizar nossa ferramenta de cálculo de chopp <span class='underline font-bold'><a href='#calculadora'>CLICANDO AQUI</a></span>, ou entrando em contato com nossos especialistas, não se preocupe com isso, ajudaremos para que não falte chopp no seu evento."
  },
  
  {
    question: "Qual é o volume máximo dos barris?",
    answer: "Enviamos para seu evento barris de 30 litros."
  },
  {
    question: "Não tenho experiência em servir chopp, é difícil?",
    answer: "Servir chopp é muito simples, nossos especialistas fornecerão instruções de como proceder na utilização da chopeira e como tirar o melhor chopp. Além disso, forneceremos instruções de segurança e quais procedimentos a serem realizados em cada etapa, para que seja uma ótima experiencia da cervejaria Neumann no seu evento."
  },
  {
    question: "E se eu não consumir todo o chopp?",
    answer: "Garantimos a qualidade do nosso produto por até 3 dias, então caso seja acordado previamente, o chopp poderá ser consumido no dia seguinte, e as instruções da melhor forma de armazenamento serão passadas por nossos especialistas."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const faqRef = useRef(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Inicializar o ScrollReveal somente se o componente FAQ estiver completamente visível
    if (inView) {
      ScrollReveal().reveal('.faq-item', {
        duration: 1000,
        distance: '30px',
        origin: 'bottom',
        reset: true,
        scale: 1,
        easing: 'ease-in-out',
        mobile: true
      });
    }
  }, [inView]);

  return (
    <section id='perguntas' className="bg-off-white" ref={faqRef}>
      <div className="flex flex-col lg:flex-row justify-center xl:gap-22 2xl:gap-44 bg-off-white container mx-auto max-w-[2500px]">
        <div className="lg:w-8/12 lg:pr-10 px-5 lg:px-10 py-14" ref={ref}>
          <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-bold mb-8">PERGUNTAS FREQUENTES</h1>
          {questions.map((item, index) => (
            <article key={index} className="faq-item mb-4 border-b border-gray-400">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full py-4 focus:outline-none font-bold"
                aria-expanded={activeIndex === index}
                aria-controls={`answer-${index}`}
              >
                <h2 className="text-lg 2xl:text-xl text-start">{item.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <p id={`answer-${index}`} className="p-4  text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </article>
          ))}
        </div>
        <div className="hidden lg:flex flex-1 bg-black">
          <img src={maqChopp} className="w-full h-full object-cover" alt="Máquina de Chopp"/>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
