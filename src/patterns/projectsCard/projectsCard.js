import React from "react";

export function ProjectCard(props) {
    return (
        <div className="bg-yelloPrimary p-2 flex flex-col gap-2">
            <a className={props.className,``} href={props.href}>
                <img className="" src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"/>
            </a>
            <div className="bg-white p-2">
                <a href={props.href}>
                    <h3 className="text-2xl font-bold font-h2Title border-b-2 border-yelloPrimary">{props.title}</h3>
                </a>
                <p className=" text-sm font-body">{props.text}</p>
            </div>
        </div>
 )   
}