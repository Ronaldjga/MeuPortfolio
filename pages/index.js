import react, { useEffect } from "react"
import { useState } from "react"
import reactDom from "react-dom"
import Head from "next/head"

import { ProjectCard } from "../src/patterns/projectsCard.js"
import { Box } from "@mui/system"
import { Technologies } from "../src/patterns/technologies.js"
import { Header } from "../src/patterns/header.js"
import { Footer } from "../src/patterns/footer.js"
import { Introduction } from "../src/patterns/introduction.js"


function HomePage() {
  return (
    <Box className="flex flex-col bg-darkBluePrimary gap-2 
    lg:flex-row lg:justify-between">
      <Head>
      <title>Ronaldjga Portifolio</title>
      <meta property="Description" content="Portifolio" key="title" />
      <meta property="Description" content="Ronald Almeida" key="title" />
      <meta property="Description" content="Ronaldjga" key="title" />
      <meta property="Description" content="Ronald_jga" key="title" />
      <meta property="Description" content="_Ronaldjga" key="title" />
      <meta property="Description" content="_Ronaldjga" key="title" />
      </Head>

      <Header/>
      <div className="
      pb-20
      sm:p-0
      lg:flex flex-col justify-center items-center gap-2 p-2
      lg:pt-20 lg:pb-16 lg:w-4/5
      "> 
        <Introduction/>
        <ProjectCard/>
        <Technologies/>
      </div>
      <Footer/>
    </Box>
  )
}

export default HomePage