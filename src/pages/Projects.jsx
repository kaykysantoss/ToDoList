import Banner from "../components/Header/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Header/Footer"
import ProjectsList from "../components/Header/ProjectsList"

function Projects() {
    return (
        <>
            <Header />
            <div className="container">
                <Banner title="projects" image="projects.jpg"/>
                <ProjectsList />
            </div>
            <Footer />

        </>
    )
}

export default Projects