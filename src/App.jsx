import { useEffect, useState } from "react"
import Card from "./components/Card"
import { ThemeProvider } from "./context/theme"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-400">

        <Navbar />
        <Hero />
        <section className="mt-10 md:mt-20 flex justify-center px-6">
          <Card />
        </section>

      </div>
    </ThemeProvider >

  )
}

export default App
