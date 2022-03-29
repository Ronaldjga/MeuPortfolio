import React from "react";
import { SocialButton } from "./header";

import linkedinIcon from '../components/img/sociaisIcons/linkedin.svg'
import instagramIcon from '../components/img/sociaisIcons/instagram.svg'
import githubIcon from '../components/img/sociaisIcons/github.svg'

export function Footer() {
    return (
        <footer className="w-full min-h-[300px] bg-yelloPrimary flex flex-col justify-center items-center gap-2
        sm:hidden
        ">
            <h2 className="text-5xl font-h1Title font-black text-center">Ronald Almeida</h2>
            <div className="w-3/4 flex justify-around">
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
        </footer>
    )
}