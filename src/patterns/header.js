import React from "react";
import Image from 'next/image'

import linkedinIcon from '../components/img/sociaisIcons/linkedin.svg'
import instagramIcon from '../components/img/sociaisIcons/instagram.svg'
import githubIcon from '../components/img/sociaisIcons/github.svg'


export function Header() {
    return (
        <header
            className="w-full h-5/6 min-h-[400px] p-5 flex flex-col justify-center items-center gap-2 bg-yelloPrimary
            sm:h-full sm:w-full sm:p-10
            lg:w-1/5 lg:min-w-[350px] lg:h-screen lg:min-h-full lg:top-0 lg:left-0 lg:z-20
        ">
            <div
                className="flex flex-col items-center gap-2
                lg:fixed lg:top-2/4 lg:-translate-y-2/4
            ">
                <img
                    className="w-3/4 xl:w-10/12 rounded-xl relative"
                    src={`https://github.com/Ronaldjga.png`}
                />

                <h1 className="font-h1Title font-black text-2xl text-center sm:text-4xl lg:text-3xl xl:text-4xl">
                    Ronald Almeida
                </h1>

                <div
                    className="w-3/4 flex justify-around"
                >
                    <SocialButton
                        href='https://www.linkedin.com/in/ronaldjga/'
                        icon={linkedinIcon}
                    />
                    <SocialButton
                        href='https://www.instagram.com/ronald_jga/'
                        icon={instagramIcon}
                    />
                    <SocialButton
                        href='https://github.com/Ronaldjga'
                        icon={githubIcon}
                    />
                </div>
            </div>
        </header>
    )
}


function SocialButton(props) {
    return (
        <a
            className="w-[50px] h-[50px] relative hover:bg-white rounded-full"
            target={"_blank"}
            href={props.href}
        >
            <Image
                layout="fill"
                src={props.icon}
            />
        </a>
    )
}