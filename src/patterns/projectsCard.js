import React from "react";
import Image from "next/image";

import chatImage from '../components/img/projects/chatImage.PNG'
import calculatorImage from '../components/img/projects/calculadorasImage.PNG'
import ecomerceImage from '../components/img/projects/ecomerceImage.PNG'
import todoListImage from '../components/img/projects/todoListImage.PNG'
import pokedexImage from '../components/img/projects/pokedex.PNG'

export function ProjectCard(props) {
    const [projects, setProjects] = React.useState([
        {
            image: chatImage,
            href: 'https://chat-project-nine.vercel.app/',
            titulo: 'Chat Project',
            text: 'Chat compartilhado com a possibilidade de login com o username do Github. Desenvolvido com React e Next.js integrado com o banco de dados relacional Supabase.',
            technology: ['React.Js', 'Next.JS', 'Supabase', 'SkynexUI']
        },
        {
            image: ecomerceImage,
            href: 'https://ecomerce-project.000webhostapp.com/',
            titulo: 'E-Comerce Project',
            text: 'Site E-comerce básico, podemos escolher os produtos do cardápio e adicionar ao carrinho em diferentes quantidades.',
            technology: ['HTML5', 'Tailwind', 'Javascript']
        },
        {
            image: calculatorImage,
            href: 'https://calculadora-rho-eight.vercel.app/',
            titulo: 'Calculadoras Online',
            text: 'Calculadoras Online é um site com as diversas calculadoras que fornecem resultados precisos.',
            technology: ['React.Js', 'Next.JS', 'Tailwind']
        },
        {
            image: todoListImage,
            href: 'https://lista-de-tarefas-six.vercel.app/',
            titulo: 'Lista de Tarefas',
            text: 'Lista de tarefas é um site onde podemos criar, editar ou deletar nossas tarefas, mantendo uma organização própria salva no LocalStorage.',
            technology: ['React.Js', 'Next.JS', 'Tailwind', 'LocalStorage']
        },
        {
            image: pokedexImage,
            href: 'https://pokemonpokedex.vercel.app/',
            titulo: 'Pokédex',
            text: 'Pokédex pokemon, com funcionalidade de pesquisa de pokemon individual, sortear pokemon aleatório ou seleção de lista de pokemons por tipos. Designer responsivo e interativo.',
            technology: ['React.Js', 'Next.JS', 'Tailwind', 'Axios', 'PokeAPI']
        },
    ])




    return (
        <>
            <main
                className="flex flex-col gap-5 px-3 py-2
                xl:items-end    
            ">
                <h2 className="font-h1Title text-white font-black text-3xl text-center 
                     sm:text-5xl sm:py-5
                    xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">
                    Projetos
                </h2>
                <div
                    className="flex flex-col gap-5
                    md:grid md:grid-cols-2
                    lg:grid-cols-2
                    xl:grid-cols-3 xl:max-w-screen-xl
                    "
                >
                    {projects.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="bg-gray-900 border-2 border-primaryPink p-2 flex flex-col justify-around gap-2
                        xl:p-5 xl:gap-5 text-white"
                            >
                                <a
                                    className={`${props.className}`} target="_blank" href={data.href}>
                                    <Image
                                        layout="responsive"
                                        src={data.image} />
                                </a>

                                <div className="w-full p-2">
                                    <a target='_blank' href={data.href}>
                                        <h3
                                            className="py-2  text-2xl font-black font-h2Title border-b-2 border-primaryPink
                                xl:text-3xl
                                ">{data.titulo}</h3>
                                    </a>
                                    <p className="w-full text-sm font-body py-3">{data.text}</p>
                                </div>

                                <div className="min-h-[100px]">
                                    <div className={`${props.techClassName} py-2 text-black grid gap-2
                                grid-cols-2
                            `}>
                                        {data.technology.map((data, i) => {
                                            return (
                                                <span
                                                    key={i}
                                                    className="bg-yelloPrimary py-1 px-2 rounded-md text-center font-semibold"
                                                >
                                                    {data}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}