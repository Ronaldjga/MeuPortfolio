import React, { useState } from "react";
import Image from 'next/image'


import iconHTML from "../components/img/TecnologiesIcons/htmlIcon.svg"
import IconCSS from "../components/img/TecnologiesIcons/cssIcon.svg"
import IconJavascript from "../components/img/TecnologiesIcons/javascriptIcon.svg"
import IconReact from "../components/img/TecnologiesIcons/reactIcon.svg"
import IconTailwind from "../components/img/TecnologiesIcons/tailwindIcon.svg"
import IconNext from "../components/img/TecnologiesIcons/nextIcon.svg"
import IconPhotoshop from "../components/img/TecnologiesIcons/photoshopIcon.svg"
import IconGit from "../components/img/TecnologiesIcons/gitIcon.svg"
import IconGithub from "../components/img/TecnologiesIcons/githubIcon.svg"
import IconFigma from "../components/img/TecnologiesIcons/figmaIcon.svg"
import IconAdobexd from "../components/img/TecnologiesIcons/adobeXDIcon.svg"

export function Technologies() {
    return (
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
        </div>
    )
}

function TechBanner(props) {
    return (
        <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <div className="w-[50px] h-[50px]">
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