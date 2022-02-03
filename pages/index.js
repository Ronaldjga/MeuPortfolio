import react from "react"
import reactDom from "react-dom"
import { Fab, Button } from "@mui/material"

import { GithubIcon, InstagramIcon, LinkedinIcon, HtmlIcon} from "../src/components/icons/icons"
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

      <section className="px-3 py-10">
        <div>
          <h2 className="font-h1Title text-white font-black text-3xl text-center">Tecnologias</h2>
          <HtmlIcon className="bg-yelloPrimary">qualquer coisa</HtmlIcon>
        </div>
      </section>
    </Box>
  )
  }
  
  export default HomePage