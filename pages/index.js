import react, { useEffect } from "react"
import { useState } from "react"
import reactDom from "react-dom"
import { Fab, Button } from "@mui/material"
import { ProjectCard } from "../src/patterns/projectsCard.js"
import { theme } from "../src/components/theme/theme"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { GithubIcon, InstagramIcon, LinkedinIcon, HtmlIcon, CSSIcon, JavascriptIcon, ReactIcon, NextIcon, TailwindIcon, PhotoshopIcon, GitIcon, GithubIconTech, AdobexdIcon, FigmaIcon } from "../src/components/icons/icons"
import { Box } from "@mui/system"

import chatImage from '../src/components/img/projects/chatImage.PNG'
import calculatorImage from '../src/components/img/projects/calculadorasImage.PNG'
import ecomerceImage from '../src/components/img/projects/ecomerceImage.PNG'
import todoListImage from '../src/components/img/projects/todoListImage.PNG'
import pokedexImage from '../src/components/img/projects/pokedex.PNG'
import { Technologies } from "../src/patterns/technologies.js"


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
            <Fab target={'_blank'} href="https://www.linkedin.com/in/ronald-almeida-749198220/" size="medium" className="bg-yelloPrimary">
              <LinkedinIcon />
            </Fab>

            <Fab target={'_blank'} href="https://www.instagram.com/ronald_jga/" size="medium" className="bg-yelloPrimary">
              <InstagramIcon />
            </Fab>

            <Fab target={'_blank'} href="https://github.com/Ronaldjga" size="medium" className="bg-yelloPrimary">
              <GithubIcon />
            </Fab>
          </div>
        </div>
      </section>






      <div className="
      pb-20
      sm:p-0
      lg:flex flex-col justify-center items-center gap-2 p-2
      lg:pt-20 lg:pb-16 lg:w-4/5
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
              ">Eu me chamo Ronald Almeida, tenho 19 anos. Atualmente, estou cursando Analise e desenvolvimento de sistemas, mas ainda assim, me esforço aprendendo ainda mais fora da faculdade. Ainda joven, busco me tornar um desenvolvedor full-Stack.</p>
          <div className="w-full flex justify-center py-5">
            <ThemeProvider theme={theme}>
              <Button target={"_blank"} href="https://drive.google.com/file/d/1L81Eae7KkEawY0_qGzlu1f33rCtv-0jx/view?usp=sharing" size="large" color="primary" variant="contained">Curriculo</Button>
            </ThemeProvider>
          </div>
        </section>


        
        <main className="flex flex-col gap-5 px-3 py-2
        xl:items-end
        ">
          <h1 className="font-h1Title text-white font-black text-3xl text-center 
          sm:text-5xl sm:py-5
          xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">Projetos</h1>
          <ProjectCard/>
        </main>

        
        <section
          className="px-3
          md:px-5
          lg:w-full
          xl:flex xl:flex-col xl:items-center
          ">
          <h2 className="font-h1Title text-white font-black text-3xl text-center 
          sm:text-5xl sm:py-5
          xl:w-full xl:text-left xl:text-4xl xl:max-w-screen-xl xl:py-10">Tecnologias</h2>
          <Technologies/>
        </section>
      </div>
      <footer className="w-full min-h-[300px] bg-yelloPrimary flex flex-col justify-center items-center gap-2
        sm:hidden
        ">
        <h2 className="text-5xl font-h1Title font-black text-center">Ronald Almeida</h2>
        <div className="w-3/4 flex justify-around">
          <Fab target={'_blank'} href="https://www.linkedin.com/in/ronald-almeida-749198220/" size="medium" className="bg-yelloPrimary">
            <LinkedinIcon />
          </Fab>


          <Fab target={'_blank'} href="https://www.instagram.com/ronald_jga/" size="medium" className="bg-yelloPrimary">
            <InstagramIcon />
          </Fab>


          <Fab target={'_blank'} href="https://github.com/Ronaldjga" size="medium" className="bg-yelloPrimary">
            <GithubIcon />
          </Fab>
        </div>
      </footer>
    </Box>
  )
}

export default HomePage