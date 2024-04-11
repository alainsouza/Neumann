import React from "react";
import parallax from "../../assets/parallax.webp";

export default function End() {
    return (
        <section style={{ backgroundImage: `url(${parallax})`, backgroundSize: 'contain' }}>
            <div className="p-5 lg:py-4 lg:px-10 lg:flex justify-between container mx-auto max-w-[2500px]">
                <p className="text-sm">&copy; {new Date().getFullYear()} Cervejaria Neumann. Todos os direitos reservados.</p>

                <p className="mt-5 lg:mt-0 text-sm ">
                    Desenvolvido por <a href="https://www.instagram.com/kevyn.dev/" target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer', textDecoration: 'underline'}}>Kevyn.dev</a> | Feito com ♥
                </p>
            </div>
        </section>
    )
}
