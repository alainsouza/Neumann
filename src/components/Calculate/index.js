import React, { useState, useEffect } from "react";
import background from "../../assets/3830838.webp";
import Modal from "../OpenCalculate";
import ScrollReveal from "scrollreveal";

const Calculate = () => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const sr = ScrollReveal({ reset: true });

        sr.reveal('#calculadora h1', {
            duration: 1000,
            origin: 'bottom',
            distance: '20px',
            delay: 100
        });

        sr.reveal('#calculadora button', {
            duration: 1000,
            origin: 'bottom',
            distance: '20px',
            delay: 300
        });
    }, []);

    useEffect(() => {
        if (openModal) {
            document.body.classList.add('overflow-hidden'); // Adicione a classe quando o modal estiver aberto
        } else {
            document.body.classList.remove('overflow-hidden'); // Remova a classe quando o modal for fechado
        }
    }, [openModal]);

    return (
        <section id="calculadora" className="flex flex-col w-full h-full justify-center items-center py-20 px-5 relative" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'bottom', backgroundRepeat: 'repeat' }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <h1 className="text-2xl text-center lg:text-4xl w-full px-5 2xl:text-5xl lg:w-2/5 lg:text-center font-bold text-white relative z-10">
                NÃO SABE QUANTOS LITROS VAI PRECISAR? NÓS TE AJUDAMOS!
            </h1>

            <button onClick={() => setOpenModal(true)} className="lg:w-auto lg:h-auto p-6 mt-5 bg-gold-light rounded-lg shadow-2xl text-sm lg:text-lg relative z-10 transition duration-300 ease-in-out hover:scale-110">
                CALCULAR QUANTIDADE DE CHOPP
            </button>

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
        </section>
    )
}

export default React.memo(Calculate);
