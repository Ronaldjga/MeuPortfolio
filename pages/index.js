import react, { useEffect } from "react"
import { useState } from "react"
import reactDom from "react-dom"
import { Fab, Button } from "@mui/material"
import { ProjectCard } from "../src/patterns/projectsCard.js"
import { theme } from "../src/components/theme/theme"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { GithubIcon, InstagramIcon, LinkedinIcon, HtmlIcon, CSSIcon, JavascriptIcon, ReactIcon, NextIcon, TailwindIcon, PhotoshopIcon, GitIcon, GithubIconTech, AdobexdIcon, FigmaIcon } from "../src/components/icons/icons"
import { Box } from "@mui/system"


function HomePage() {
  return (
    <Box className="flex flex-col bg-darkBluePrimary gap-2 
    lg:flex-row lg:justify-between">
      <section
        className="w-full h-5/6 min-h-[400px] p-5 flex flex-col justify-center items-center gap-2 bg-yelloPrimary
          sm:h-full sm:w-full sm:p-10
          lg:w-1/5 lg:min-w-[350px] lg:h-screen lg:min-h-full lg:top-0 lg:left-0 lg:z-20
        ">
        <div className=" flex flex-col items-center gap-2
        lg:fixed lg:top-2/4 lg:-translate-y-2/4
        ">
          <img className="w-3/4 xl:w-10/12 rounded-xl" src="https://github.com/Ronaldjga.png" />
          <h1 className="font-h1Title font-black text-2xl text-center sm:text-4xl lg:text-3xl xl:text-4xl">Ronald Almeida</h1>
          <div className="w-3/4 flex justify-around">
            <a target={'_blank'} href="https://www.linkedin.com/in/ronald-almeida-749198220/">
              <Fab size="medium" className="bg-yelloPrimary">
                <LinkedinIcon />
              </Fab>
            </a>
            
            <a target={'_blank'} href="https://www.instagram.com/ronald_jga/">
              <Fab size="medium" className="bg-yelloPrimary">
                <InstagramIcon />
              </Fab>
            </a>
            
            <a target={'_blank'} href="https://github.com/Ronaldjga">
              <Fab size="medium" className="bg-yelloPrimary">
                <GithubIcon />
              </Fab>
            </a>
          </div>
        </div>
      </section>






      <div className="
      pb-20
      sm:p-0
      lg:flex flex-col justify-center items-center gap-2 p-2
      lg:pt-20 lg:pb-16
      ">

        
        <section
          className="px-3 py-10
            sm:w-full
            md:w-2/3 mx-auto md:text-lg
            lg:max-w-screen-xl lg:w-full
            xl:w-2/3
            ">
          <h2 className="font-h1Title text-white font-black text-7xl text-center">Oi!</h2>
          <p
            className="font-body text-white indent-10
              xl:text-xl
              ">Eu me chamo Ronald Almeida, tenho 18 anos. Atualmente, estou cursando Analise e desenvolvimento de sistemas, mas ainda assim, me esforço aprendendo ainda mais fora da faculdade. Ainda joven, busco me tornar um desenvolvedor full-Stack.</p>
          <div className="w-full flex justify-center py-5">
            <ThemeProvider theme={theme}>
              <Button size="large" color="primary" variant="contained">Curriculo</Button>
            </ThemeProvider>
          </div>
        </section>


        
        <main className="flex flex-col gap-5 px-3 py-2
        xl:items-end
        ">
          <h1 className="font-h1Title text-white font-black text-3xl text-center 
          sm:text-5xl sm:py-5
          xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">Projetos</h1>
          <div
            className="flex flex-col gap-5
            md:grid md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-3 xl:max-w-screen-xl
            ">
            <ProjectCard href="https://chat-project-nine.vercel.app/" title="Chat Project" text="Projeto de chat, logado com o username do github. Algumas das tecnologias usadas nesse projeto: React, Next.js, Supabase." imagem="https://s10.gifyu.com/images/project-chat.gif" />
            <ProjectCard href="" title="" text="" />
            <ProjectCard href="" title="" text="" />
            <ProjectCard href="" title="" text="" />
            <ProjectCard href="" title="" text="" />
            <ProjectCard href="" title="" text="" />
          </div>
        </main>

        
        <section
          className="px-3
          md:px-5
          lg:w-full
          xl:flex xl:flex-col xl:items-end
          ">
          <h2 className="font-h1Title text-white font-black text-3xl text-center 
          sm:text-5xl sm:py-5
          xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">Tecnologias</h2>
          <div
            className="flex flex-col gap-3
            md:grid md:grid-cols-2
            lg:grid-cols-2 lg:w-full
            xl:grid-cols-3 xl:max-w-screen-xl
          ">
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
      </div>
      <footer className="w-full min-h-[300px] bg-yelloPrimary flex flex-col justify-center items-center gap-2
        sm:hidden
        ">
          <h2 className="text-5xl font-h1Title font-black text-center">Ronald Almeida</h2>
          <div className="w-3/4 flex justify-around">
            <a target={'_blank'} href="https://www.linkedin.com/in/ronald-almeida-749198220/">
              <Fab size="medium" className="bg-yelloPrimary">
                <LinkedinIcon />
              </Fab>
            </a>
            
            <a target={'_blank'} href="https://www.instagram.com/ronald_jga/">
              <Fab size="medium" className="bg-yelloPrimary">
                <InstagramIcon />
              </Fab>
            </a>
            
            <a target={'_blank'} href="https://github.com/Ronaldjga">
              <Fab size="medium" className="bg-yelloPrimary">
                <GithubIcon />
              </Fab>
            </a>
          </div>
        </footer>
    </Box>
  )
}

export default HomePage