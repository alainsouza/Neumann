import React, { useState, useEffect } from "react";

// Definição do componente Modal
const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-dark bg-opacity-70 px-5 z-50">
            <div className="bg-white p-4 rounded-xl shadow-xl md:w-auto">
                {children}
            </div>
        </div>
    );
};

const IsOver18 = () => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenModal(true);
        }, 500); // Atraso de 1 segundo

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, []);

    useEffect(() => {
        if (openModal) {
            document.body.classList.add('overflow-hidden'); // Adicione a classe quando o modal estiver aberto
        } else {
            document.body.classList.remove('overflow-hidden'); // Remova a classe quando o modal for fechado
        }
    }, [openModal]);

    const handleNoClick = () => {
        setOpenModal(false);
        window.location.href = "https://www.google.com";
    };

    return (
        <section>
            <Modal isOpen={openModal}>
                <div className="flex flex-col justify-center items-center p-4 lg:p-14 bg-gold-light rounded-xl text-center w-full h-full">
                    <p className="text-sm lg:text-lg text-gray font-bold">Seja bem vindo(a)</p>
                    <h1 className="text-2xl lg:text-5xl font-bold mt-4">Você é maior de idade ?</h1>
                    <p className="text-sm lg:text-lg text-gray font-medium mt-4">Entrando no site você confirma que tem +18 anos</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start lg:gap-5 mt-5">
                        <button className="w-20 lg:full mt-4 px-4 lg:px-14 py-4 bg-white text-black rounded-full text-center flex justify-center items-center" onClick={() => setOpenModal(false)}>Sim</button>
                        <button className="w-20 lg:full mt-4 px-4 lg:px-14 py-4 bg-white text-black rounded-full text-center flex justify-center items-center" onClick={handleNoClick}>Não</button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default React.memo(IsOver18);
