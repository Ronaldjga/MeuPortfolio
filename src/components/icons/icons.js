import React from "react";
import Image from "next/image";

//! ICONS
import Github from "../img/github.svg"
import Instagram from "../img/instagram.svg"
import Linkedin from "../img/linkedin.svg"

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