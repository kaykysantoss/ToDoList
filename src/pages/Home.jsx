import Banner from "../components/Header/Banner"
import Button from "../components/Header/Button"
import Header from "../components/Header/Header"
import Hero from "../components/Header/Hero"
import Footer from "../components/Header/Footer"
import ProjectsList from "../components/Header/ProjectsList"

function Home() {
    return (
        <>
            <Header />

            
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Home