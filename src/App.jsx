import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import Tech from "./Components/Tech"
import Projects from "./Components/Projects"
import ContactForm from "./Components/ContactForm"


function App() {
  

  return (
    <> 
    <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <main className="flex flex-col items-center px-4 md:px-8 lg:px-10">
        <NavBar/>
        <Hero/>
        <Tech/>
        <Projects/>
        <ContactForm/>
     </main>
    </>
  )
}

export default App
