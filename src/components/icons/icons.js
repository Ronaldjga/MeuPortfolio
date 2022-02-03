import React from "react";
import Image from "next/image";

//! ICONS Sociais
import Github from "../img/sociaisIcons/github.svg"
import Instagram from "../img/sociaisIcons/instagram.svg"
import Linkedin from "../img/sociaisIcons/linkedin.svg"

//! Icons Technologies
import HtmlIconSVG from "../img/technologiesIcons/htmlIcon.svg"

export function GithubIcon(props) {
    return (
        <>
            <Image width={props.width} height={props.height} src={Github} />
        </>
    )
}
export function InstagramIcon(props) {
    return (
        <>
            <Image width={props.width} height={props.height} src={Instagram} />
        </>
    )
}
export function LinkedinIcon(props) {
    return (
        <>
            <Image width={props.width} height={props.height} src={Linkedin} />
        </>
    )
}

export function HtmlIcon(props) {
    return (
        <>
            <Image src={HtmlIconSVG}/>
        </>

    )
}