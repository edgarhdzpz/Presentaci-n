//generar un slider de targetas
"use client"
import Slider from "@/components/Slider";
// import { useRouter } from "next/router";

import { useEffect, useState } from "react";


export default function SliderPage() {
    const tarjetas = [
        {
            url: '/fachada/decora_fachada.jpg',
            comentario: 'Decoración con tabique'
        },
        {
            url: '/fachada/decora_fachada2.jpg',
            comentario: 'Decoración con madera'
        },
        {
            url: '/fachada/decora_fachada3.jpg',
            comentario: 'Fachada de Arcos'
        },
        {
            url: '/fachada/decora_fachada4.jpg?',
            comentario: 'Fachada de Arcos'
        },
        {
            url: '/fachada/decora_fachada5.jpg',
            comentario: 'Fachada con teja'
        },
        {
            url: '/fachada/decora_fachada6.jpg',
            comentario: 'Fachada de pidras (marmol)'
        },
        {
            url: '/fachada/decora_fachada7.jpg',
            comentario: 'Fachada con tabique'
        },
        {
            url: '/fachada/decora_fachada8.jpg?',
            comentario: 'Decoraciones con marmol'
        },
        {
            url: '/fachada/decora_fachada9.jpg',
            comentario: 'Ventanales con blog aparente'
        },
        {
            url: '/fachada/decora_fachada10.jpg?',
            comentario: 'Ventanales con blog aparente'
        },
        {
            url: '/fachada/decora_fachada11.jpg',
            comentario: 'Ventanales con blog aparente'
        },
        {
            url: '/fachada/decora_fachada12.jpg',
            comentario: 'Ventanales con blog aparente'
        },
    ]
    const tarjetas2 = [
        {
            url: '/ceramicas/piso_ceramic.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic2.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic3.jpg',
            comentario: 'Alverca'
        },
        {
            url: '/ceramicas/piso_ceramic4.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic5.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic6.jpg',
            comentario: 'Marmol'
        },
        {
            url: '/ceramicas/piso_ceramic7.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic9.jpg',
            comentario: 'Ceramica'
        },
        {
            url: '/ceramicas/piso_ceramic10.jpg',
            comentario: 'Alverca'
        },
        {
            url: '/ceramicas/piso_ceramic11.jpg',
            comentario: 'Alverca'
        },
        {
            url: '/ceramicas/piso_ceramic12.jpg',
            comentario: 'Concreto'
        },
    ]
    const escaleras = [
        {
            url: '/escaleras/esca.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca2.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca3.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca4.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca5.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca6.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca7.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca8.jpg',
            comentario: ''
        },
        {
            url: '/escaleras/esca9.jpg',
            comentario: ''
        },
    ]
    const obras = [
        {
            url: '/obras/obras1.jpg'
        },
        {
            url: '/obras/obras2.jpg'
        },
        {
            url: '/obras/obras3.jpg'
        },
        {
            url: '/obras/obras4.jpg'
        },
        {
            url: '/obras/obras5.jpg'
        },
        {
            url: '/obras/obras6.jpg'
        },
        {
            url: '/obras/obras7.jpg'
        },
        {
            url: '/obras/obras8.jpg'
        },
        {
            url: '/obras/obras9.jpg'
        },
        {
            url: '/obras/obras10.jpg'
        },
        {
            url: '/obras/obras11.jpg'
        },
        {
            url: '/obras/obras12.jpg'
        },
        {
            url: '/obras/obras13.jpg'
        },
        {
            url: '/obras/obras14.jpg'
        },
        {
            url: '/obras/obras15.jpg'
        },
        {
            url: '/obras/obras16.jpg'
        },
        {
            url: '/obras/obras17.jpg'
        },
        {
            url: '/obras/obras18.jpg'
        },
    ]

    //funcion que genera un producto de una targeta
    const productCard = (tarjeta, index) => (
        <div
            key={index}
            className="w-full md:w-[290px] h-[380px] md:h-[380px] bg-black p-2 border rounded-lg text-black relative"
        >
            <img src={tarjeta.url} alt="" className="object-cover w-full h-full" />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-blue-400 text-xl p-2">{tarjeta.comentario}</p>
        </div>
    );

    const productCard2 = (tarjeta2, index) => (
        <div
            key={index}
            className="w-full md:w-[250px] h-[340px] md:h-[340px] bg-black p-2 border rounded-lg text-black relative"
        >
            <img src={tarjeta2.url} alt="" className="object-cover w-full h-full" />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-blue-400 text-xl p-2">{tarjeta2.comentario}</p>
        </div>
    );

    const productCard3 = (escaleras, index) => (
        <div
            key={index}
            className="w-full md:w-[280px] h-[370px] md:h-[370px] bg-black p-2 border rounded-lg text-black relative"
        >
            <img src={escaleras.url} alt="" className="object-cover w-full h-full" />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-blue-400 text-xl p-2">{escaleras.comentario}</p>
        </div>
    );

    const productCard4 = (obra, index) => (
        <div
            key={index}
            className="w-full md:w-[280px] h-[370px] md:h-[370px] bg-black p-2 border rounded-lg text-black relative"
        >
            <img src={obra.url} alt="" className="object-cover w-full h-full" />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-blue-400 text-xl p-2">{obra.comentario}</p>
        </div>
    );

    return (
        <div class="relative">
            <div className="p-2 max-w-screen-xl mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold text-sky-400/50 text-center my-8">
                    Bienvenido a mi perfil
                </h1>
                <div class="bg-gray-400 py-10 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto text-center">
                        <h1 class="text-3xl font-bold text-gray-800 mb-6">¡Hola! Soy Marcos Guzmán Castellanos.</h1>
                        <p class="text-lg text-gray-600 mb-6">Déjame contarte sobre mi pasión por la construcción. He dedicado años a convertirme en un experto en cada aspecto del proceso, desde la plomería hasta la electricidad, y desde los cimientos hasta las decoraciones con mármol y la pintura.</p>
                        <p class="text-lg text-gray-600 mb-6">Cuando se trata de plomería, resuelvo cualquier problema con las tuberías y diseño sistemas que aseguran un flujo de agua perfecto. Mi destreza en electricidad garantiza un suministro eléctrico confiable, mientras que mis sólidos cimientos son la base de los sueños de mis clientes.</p>
                        <p class="text-lg text-gray-600 mb-6">Pero lo que realmente me apasiona es el toque final. Cada detalle cuenta para mí, desde la meticulosa colocación de azulejos hasta la aplicación cuidadosa de la pintura. Me esfuerzo por dar vida a las visiones de mis clientes, añadiendo un toque de elegancia con decoraciones de mármol que elevan el ambiente de cualquier espacio.</p>
                        <p class="text-lg text-gray-600 mb-6">Puedes echar un vistazo a algunas de mis construcciones:</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-4">Decoraciones y fachadas</h3>
                <div className="mb-8">
                    <Slider
                        height={380}
                        cardWidth={290}
                        items={tarjetas.map((tarjeta, index) => productCard(tarjeta, index))}
                        className="my-6 mx4"
                    />
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-4">Pisos y albercas</h3>
                <Slider
                    height={340}
                    cardWidth={250}
                    items={tarjetas2.map((tarjeta2, index) => productCard2(tarjeta2, index))}
                    className="my-6 mx4"
                />

                <h3 className="text-xl font-bold text-white text-center mb-4">Escaleras</h3>
                <div className="max-w-screen-xl w-2/3 m-auto">
                    <Slider
                        height={370}
                        cardWidth={280}
                        items={escaleras.map((escaleras, index) => productCard3(escaleras, index))}
                        className="my-6 mx4"
                    />
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-4">Obras</h3>
                <Slider
                    height={370}
                    cardWidth={280}
                    items={obras.map((obra, index) => productCard4(obra, index))}
                    className="mx-4 mb-40"
                />

                <footer class="bg-gray-900 text-gray-300 py-8 bottom-0 left-0 w-full fixed p-4 rounded mt-10">
                    <h3 className="text-xl font-bold text-white text-center mb-4">Para cualquier cotización contactame</h3>
                    <div class="max-w-4xl mx-auto flex justify-center items-center">
                        <ul class="flex space-x-4">
                            <li>
                                <a href="https://www.facebook.com/marcos.castellanos.73744?mibextid=ZbWKwL" target="_blank" class="hover:text-gray-500 transition duration-300">
                                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">

                                            <path
                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+527771904481" class="hover:text-gray-500 transition duration-300">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/527771904481?text=Hola%20quiero%20un%20presupuesto😃" class="hover:text-gray-500 transition duration-300">
                                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </footer>

            </div>
        </div>
    );
}
