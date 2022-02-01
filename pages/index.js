import react from "react"
import reactDom from "react-dom"
import { Fab } from "@mui/material"

import { GithubIcon, InstagramIcon, LinkedinIcon } from "../src/components/icons/icons"


function HomePage() {
  return (
    <>
      <section className="w-full h-5/6 flex flex-col justify-center items-center gap-2 bg-yelloPrimary">
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
      
      <section>

      </section>
    </>
  )
  }
  
  export default HomePage