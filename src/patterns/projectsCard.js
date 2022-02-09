import React from "react";

export function ProjectCard(props) {
    return (
        <div
            className="bg-yelloPrimary p-2 flex flex-col gap-2
            xl:p-5 xl:gap-5">
            <a className={props.className,``} target="_blank" href={props.href}>
                <img className="" src={props.imagem}/>
            </a>
            <div className="w-full bg-white p-2">
                <a target='_blank'  href={props.href}>
                    <h3
                        className="py-2  text-2xl font-black font-h2Title border-b-2 border-yelloPrimary
                        xl:text-3xl
                        ">{props.title}</h3>
                </a>
                <p className="w-full text-sm font-body py-3">{props.text}</p>
            </div>
        </div>
 )   
}