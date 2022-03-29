import React, { useState } from "react";
import Image from 'next/image'


import iconHTML from "../components/img/TecnologiesIcons/htmlIcon.svg"
import iconCSS from "../components/img/TecnologiesIcons/cssIcon.svg"
import iconJavascript from "../components/img/TecnologiesIcons/javascriptIcon.svg"
import iconReact from "../components/img/TecnologiesIcons/reactIcon.svg"
import iconTailwind from "../components/img/TecnologiesIcons/tailwindIcon.svg"
import iconNext from "../components/img/TecnologiesIcons/nextIcon.svg"
import iconPhotoshop from "../components/img/TecnologiesIcons/photoshopIcon.svg"
import iconGit from "../components/img/TecnologiesIcons/gitIcon.svg"
import iconGithub from "../components/img/TecnologiesIcons/githubIcon.svg"
import iconFigma from "../components/img/TecnologiesIcons/figmaIcon.svg"
import iconAdobexd from "../components/img/TecnologiesIcons/adobeXDIcon.svg"

export function Technologies() {
    return (
        <section
            className="px-3
        md:px-5
        lg:w-full
        xl:flex xl:flex-col xl:items-center
        ">
            <h2 className="font-h1Title text-white font-black text-3xl text-center 
            sm:text-5xl sm:py-5
            xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">
                Tecnologias
            </h2>
            <div
                className="flex flex-col gap-3
            md:grid md:grid-cols-2
            lg:grid-cols-2 lg:w-full
            xl:grid-cols-3 xl:max-w-screen-xl
            ">
                <TechBanner
                    icon={iconHTML}
                    name="HTML5"
                />
                <TechBanner
                    icon={iconCSS}
                    name="CSS3"
                />
                <TechBanner
                    icon={iconJavascript}
                    name="Javascript"
                />
                <TechBanner
                    icon={iconReact}
                    name="React.JS"
                />
                <TechBanner
                    icon={iconNext}
                    name="Next.JS"
                />
                <TechBanner
                    icon={iconTailwind}
                    name="Tailwind"
                />
                <TechBanner
                    icon={iconPhotoshop}
                    name="Photoshop"
                />
                <TechBanner
                    icon={iconGit}
                    name="GIT"
                />
                <TechBanner
                    icon={iconGithub}
                    name="Github"
                />
                <TechBanner
                    icon={iconFigma}
                    name="Figma"
                />
                <TechBanner
                    icon={iconAdobexd}
                    name="Adobe XD"
                />
            </div>
        </section>
    )
}

function TechBanner(props) {
    return (
        <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <div className="w-[50px] h-[50px] relative">
                <Image
                    layout='fill'
                    src={props.icon}
                />
            </div>

            <p className="text-4xl font-h2Title">
                {props.name}
            </p>
        </div>
    )
}