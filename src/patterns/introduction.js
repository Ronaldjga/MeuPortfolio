import React from "react";
import { theme } from "../components/theme/theme"
import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

export function Introduction() {
    return (
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
    )
}