import React from "react";

export function ProjectCard(props) {
    return (
        <div
            className="bg-gray-900 border-2 border-yelloPrimary p-2 flex flex-col justify-around gap-2
            xl:p-5 xl:gap-5 text-white">
            <a className={`${props.className}`} target="_blank" href={props.href}>
                <img className="" src={props.imagem}/>
            </a>
            <div className="w-full p-2">
                <a target='_blank'  href={props.href}>
                    <h3
                        className="py-2  text-2xl font-black font-h2Title border-b-2 border-yelloPrimary
                        xl:text-3xl
                        ">{props.title}</h3>
                </a>
                <p className="w-full text-sm font-body py-3">{props.text}</p>
            </div>
            <div className="min-h-[100px]">
                <div className={`${props.techClassName} py-2 text-black  grid grid-cols-3 gap-2`}>
                    <Tech
                        techClassName={props.techOneClassName}
                        tech={props.techOne}
                    />
                    <Tech
                        techClassName={props.techTwoClassName}
                        tech={props.techTwo}
                    />
                    <Tech
                        tech={props.techThree}
                        techClassName={props.techThreeClassName}
                    />
                    <Tech
                        tech={props.techFour}
                        techClassName={props.techFourClassName}
                    />
                    <Tech
                        tech={props.techFive}
                        techClassName={props.techFiveClassName}
                    />
                    <Tech
                        techClassName={props.techSixClassName}
                        tech={props.techSix}
                    />
                </div>
            </div>
        </div>
 )   
}

function Tech(props) {
    return (
        <span className={`${props.techClassName} bg-yelloPrimary py-1 px-2 rounded-md text-center font-semibold`}>
            {props.tech}
        </span>
    )
}