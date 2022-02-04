import React from "react";

export function ProjectCard(props) {
    return (
        <div className="bg-yelloPrimary p-2">
            <a className={props.className,``} href={props.href}>
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"/>
                <h3 className="text-white text-2xl font-bold">{props.title}</h3>
            </a>
            <p>{props.text}</p>
        </div>
 )   
}