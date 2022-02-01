import react from "react"
import reactDom from "react-dom"
import linkedinIcon from "../public/img/linkedinIcon.png"


function HomePage() {
  return (
    <>
      <div className="bg-darkBluePrimary">
        <div className="w-full h-3/4 flex flex-col justify-center items-center gap-2 bg-yelloPrimary">
          <img className="w-3/4 rounded-xl" src="https://github.com/Ronaldjga.png" />
          <p className="font-h1Title font-black text-2xl text-center">Ronald Almeida</p>
          <div>
            <img src="../public/img/linkedinIcon.png" />
          </div>
        </div>
     </div>
    </>
  )
  
  }
  
  export default HomePage