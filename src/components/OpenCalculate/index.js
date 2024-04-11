import React, { useState } from "react";
import people from "../../assets/people.webp";
import relogio from "../../assets/relogio.webp";
import beer from "../../assets/icon.webp";
import { FiXOctagon } from "react-icons/fi";

const OpenCalculate = ({ isOpen, setModalOpen }) => {
    const [peopleCount, setPeopleCount] = useState('');
    const [eventDuration, setEventDuration] = useState('');
    const [choppEstimate, setChoppEstimate] = useState('');


    const handlePeopleCountChange = (event) => {
        const count = event.target.value;
        setPeopleCount(count);
        calculateChoppEstimate(count, eventDuration);
    };

    const handleEventDurationChange = (event) => {
        const duration = event.target.value;
        setEventDuration(duration);
        calculateChoppEstimate(peopleCount, duration);
    };

    const calculateChoppEstimate = (peopleCount, eventDuration) => {
        if (peopleCount && eventDuration) {
            const estimate = parseFloat(peopleCount) * parseFloat(eventDuration) * 0.5;
            setChoppEstimate(estimate);
        } else {
            setChoppEstimate('');
        }
    };

    const whatsappNumber = 'https://api.whatsapp.com/send?phone=5561981789111&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20quero%20ter%20Chopp%20Neumann%20no%20meu%20evento!';

    if (isOpen) {
        return (
            <>
            {/*DESKTOP*/}
            <section className="hidden fixed top-0 bottom-0 left-0 right-0 lg:flex items-center justify-center z-50 overflow-auto overflow-y-auto" style={{ background: 'rgba(0,0,0,0.7)' }}>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl max-h-screen overflow-y-auto p-5 bg-off-white rounded-xl">
                <div className="flex items-center justify-between pt-10 pb-10">
                    <h1 className="text-4xl font-bold">Como funciona a calculadora de chopp?</h1>
                    <FiXOctagon onClick={setModalOpen} className="text-5xl cursor-pointer"/>
                </div>

                <div className="w-full h-0.5 bg-black mb-20" />

                <div className="flex flex-col">
                    <div className="flex items-stretch justify-between mb-8">
                        <div className="flex flex-col items-start px-5 flex-grow" style={{ flexBasis: 0 }}>
                            <div className="bg-gold-light w-20 h-20 mt-5 rounded-full flex justify-center items-center mb-5">
                                <img src={people} alt="icon" className="w-1/2" />
                            </div>
                            <div className="text-start ">
                                <h1 className="text-xl font-bold mb-2">Indique a quantidade de pessoas que beberão o chopp</h1>
                                <p className="text-lg">Preencha abaixo a quantidade exata de pessoas que irão consumir o chopp, mas não inclua as pessoas que não irão beber.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start px-5 flex-grow" style={{ flexBasis: 0 }}>
                            <div className="bg-gold-light w-20 h-20 mt-5 rounded-full flex justify-center items-center mb-5">
                                <img src={relogio} alt="icon" className="w-1/2" />
                            </div>
                            <div className="text-start px-5">
                                <h1 className="text-xl font-bold mb-2">Indique uma estimativa de duração do evento</h1>
                                <p className="text-lg">Para saber quantos litros de chopp são necessários, precisamos saber quanto tempo o evento durará. Faça uma estimativa e preencha abaixo.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start px-5 flex-grow" style={{ flexBasis: 0 }}>
                            <div className="bg-gold-light w-20 h-20 mt-5 rounded-full flex justify-center items-center mb-5">
                                <img src={beer} alt="icon" className="w-1/2" />
                            </div>
                            <div className="text-start px-5">
                                <h1 className="text-xl font-bold mb-2">Veja a estimativa de chopp necessária para seu evento</h1>
                                <p className="text-lg">Ao finalizar o preenchimento, a calculadora mostrará aproximadamente quantos litros de chopp que você vai precisar para garantir a festa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-black mt-20 mb-20" />

                    <div className="flex items-center justify-between mb-4 gap-4">
                        <div className="flex flex-col w-1/3 mb-4">
                            <label htmlFor="peopleCountInput">Quantidade de pessoas que consomem:</label>
                            <input
                                id="peopleCountInput"
                                type="number"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-5"
                                placeholder="Digite a quantidade"
                                value={peopleCount}
                                onChange={handlePeopleCountChange}
                            />
                        </div>
                        <div className="flex flex-col w-1/3 mb-4">
                            <label htmlFor="eventDurationSelect">Estimativa de duração do evento:</label>
                            <select
                                id="eventDurationSelect"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-5"
                                value={eventDuration}
                                onChange={handleEventDurationChange}
                            >
                                <option value="">Escolha a duração</option>
                                <option value="2">2 horas</option>
                                <option value="4">4 horas</option>
                                <option value="8">8 horas</option>
                                <option value="12">12 horas</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-1/3 mb-4">
                            <label htmlFor="choppEstimateInput">A quantidade estimada é de:</label>
                            <input
                                id="choppEstimateInput"
                                type="text"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                value={`${choppEstimate} Litros`}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start mt-12">
                        <h1 className="text-2xl font-bold" style={{ color: '#282828' }}>Fazer pedido</h1>

                        <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                            <button className="lg:w-48 lg:h-auto mt-2 p-5 bg-gold-light rounded-lg shadow-2xl text-sm lg:text-lg relative z-10 transition duration-300 ease-in-out hover:scale-110">
                                QUERO COMPRAR
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

            {/*MOBILE*/}
            <section className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 px-3 lg:hidden" style={{ background: 'rgba(0,0,0,0.7)' }}>
                <div className="w-full max-w-4xl h-full overflow-y-auto p-5 bg-off-white rounded-xl">
                <div className="flex items-center justify-between py-2">
                        <h1 className="text-2xl font-bold w-3/5">Como funciona a calculadora de chopp?</h1>
                        <div className="modal-close">
                            <FiXOctagon onClick={setModalOpen} className="text-5xl cursor-pointer"/>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-black mb-10" />

                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-8">
                            <div className="bg-gold-light w-20 h-20 rounded-full flex justify-center items-center">
                                <img src={people} alt="icon" className="w-1/2" />
                            </div>
                            <div className="mt-5 text-center">
                                <h1 className="text-xl font-bold">Indique a quantidade de pessoas que beberão o chopp</h1>
                                <p className="mt-2 text-lg">Preencha abaixo a quantidade exata de pessoas que irão consumir o chopp, mas não inclua as pessoas que não irão beber.</p>
                                <input
                                    type="number"
                                    className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Digite a quantidade"
                                    value={peopleCount}
                                    onChange={handlePeopleCountChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-8">
                            <div className="bg-gold-light w-20 h-20 rounded-full flex justify-center items-center">
                                <img src={relogio} alt="icon" className="w-1/2" />
                            </div>
                            <div className="mt-5 text-center">
                                <h1 className="text-xl font-bold">Indique uma estimativa de duração do evento</h1>
                                <p className="mt-2 text-lg">Para saber quantos litros de chopp são necessários, precisamos saber quanto tempo o evento durará. Faça uma estimativa e preencha abaixo.</p>
                                <select
                                    className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    value={eventDuration}
                                    onChange={handleEventDurationChange}
                                >
                                    <option value="">Escolha a duração</option>
                                    <option value="2">2 horas</option>
                                    <option value="4">4 horas</option>
                                    <option value="8">8 horas</option>
                                    <option value="12">12 horas</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-8">
                            <div className="bg-gold-light w-20 h-20 rounded-full flex justify-center items-center">
                                <img src={beer} alt="icon" className="w-1/2" />
                            </div>
                            <div className="mt-5 text-center">
                                <h1 className="text-xl font-bold">Veja a estimativa de chopp necessária para seu evento</h1>
                                <p className="mt-2 text-lg">Ao finalizar o preenchimento, a calculadora mostrará aproximadamente quantos litros de chopp que você vai precisar para garantir a festa.</p>
                                <input
                                    type="text"
                                    className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    value={`${choppEstimate} Litros`}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center mt-8">
                            <h1 className="text-xl font-bold" style={{ color: '#282828' }}>Fazer pedido</h1>

                            <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
                                <button className="lg:w-52 lg:h-auto mt-2 p-6 bg-gold-light rounded-lg shadow-2xl text-sm lg:text-lg relative z-10 transition duration-300 ease-in-out hover:scale-110">
                                    QUERO COMPRAR
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            </>
        );
    }
    return null;
}

export default React.memo(OpenCalculate);
