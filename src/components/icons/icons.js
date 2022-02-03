import React from "react";
import Image from "next/image";

//! ICONS Sociais
import Github from "../img/sociaisIcons/github.svg"
import Instagram from "../img/sociaisIcons/instagram.svg"
import Linkedin from "../img/sociaisIcons/linkedin.svg"

//! Icons Technologies
import IconHTML from "../img/TecnologiesIcons/htmlIcon.svg"
import IconCSS from "../img/TecnologiesIcons/CSSIcon.svg"
import IconJavascript from "../img/TecnologiesIcons/javascriptIcon.svg"
import IconReact from "../img/TecnologiesIcons/reactIcon.svg"
import IconTailwind from "../img/TecnologiesIcons/tailwindIcon.svg"
import IconNext from "../img/TecnologiesIcons/nextIcon.svg"
import IconPhotoshop from "../img/TecnologiesIcons/photoshopIcon.svg"
import IconGit from "../img/TecnologiesIcons/gitIcon.svg"
import IconGithub from "../img/TecnologiesIcons/githubIcon.svg"
import IconFigma from "../img/TecnologiesIcons/figmaIcon.svg"
import IconAdobexd from "../img/TecnologiesIcons/adobeXDIcon.svg"

export function GithubIcon(props) {
    return (<Image width={props.width} height={props.height} src={Github} />)
}
export function InstagramIcon(props) {
    return (<Image width={props.width} height={props.height} src={Instagram} />)
}
export function LinkedinIcon(props) {
    return (<Image width={props.width} height={props.height} src={Linkedin} />)
}

export function HtmlIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconHTML} />)
}

export function CSSIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconCSS} />)
}

export function JavascriptIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconJavascript} />)
}

export function ReactIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconReact} />)
}

export function NextIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconNext} />)
}

export function TailwindIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconTailwind} />)
}

export function GitIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconGit} />)
}

export function GithubIconTech(props) {
    return (<Image width={props.width} height={props.height} src={IconGithub} />)
}

export function PhotoshopIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconPhotoshop} />)
}

export function FigmaIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconFigma} />)
}

export function AdobexdIcon(props) {
    return (<Image width={props.width} height={props.height} src={IconAdobexd} />)
}