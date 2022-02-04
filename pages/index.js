import react, { useEffect } from "react"
import { useState } from "react"
import reactDom from "react-dom"
import { Fab, Button } from "@mui/material"
import { ProjectCard } from "../src/patterns/projectsCard/projectsCard"

import { GithubIcon, InstagramIcon, LinkedinIcon, HtmlIcon, CSSIcon, JavascriptIcon, ReactIcon, NextIcon, TailwindIcon, PhotoshopIcon, GitIcon, GithubIconTech, AdobexdIcon, FigmaIcon} from "../src/components/icons/icons"
import { Box } from "@mui/system"


function HomePage() {
  return (
    <Box className="flex flex-col bg-darkBluePrimary">
      <section className="w-full h-5/6 min-h-[400px] p-3 flex flex-col justify-center items-center gap-2 bg-yelloPrimary">
        <img className="w-3/4 rounded-xl" src="https://github.com/Ronaldjga.png" />
        <p className="font-h1Title font-black text-2xl text-center">Ronald Almeida</p>
        <div className="w-3/4 flex justify-around">
          <Fab size="medium" className="bg-yelloPrimary">
            <LinkedinIcon />
          </Fab>
          <Fab size="medium" className="bg-yelloPrimary">
            <InstagramIcon />
          </Fab>
          <Fab size="medium" className="bg-yelloPrimary">
            <GithubIcon />
          </Fab>
        </div>
      </section>
      
      <section className="px-3 py-10">
        <h1 className="font-h1Title text-white font-black text-7xl text-center">Oi!</h1>
        <p className="font-body text-white indent-10">Eu me chamo Ronald Almeida, tenho 18 anos. Atualmente, estou cursando Analise e desenvolvimento de sistemas, mas ainda assim, me esforço aprendendo ainda mais fora da faculdade. Ainda joven, busco me tornar um desenvolvedor full-Stack.</p>
        <div className="w-full flex justify-center py-5">
          <Button size="large" color="inherit" className="bg-yelloPrimary text-darkBluePrimary " variant="contained">Curriculo</Button>
        </div>
      </section>

      <main>
          <ProjectCard href="https://www.youtube.com/" title="Ronald Almeida" text="çaoiewngçoiaewngçaoewnig"/>
      </main>     
      

      <section className="px-5 py-10">
        <h2 className="font-h1Title text-white font-black text-3xl text-center">Tecnologias</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <HtmlIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">HTML 5</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <CSSIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">CSS 3</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <JavascriptIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Javascript</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <NextIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Next.JS</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <PhotoshopIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Photoshop</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <AdobexdIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">AdobeXd</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <TailwindIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Tailwind</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <GitIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Git</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <GithubIconTech width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Github</p>
          </div>
          <div className="bg-yelloPrimary flex justify-between items-center p-1">
            <FigmaIcon width="50" height="50" className="bg-yelloPrimary" />
            <p className="text-4xl font-h2Title">Figma</p>
          </div>
        </div>
      </section>
    </Box>
  )
  }
  
  export default HomePage