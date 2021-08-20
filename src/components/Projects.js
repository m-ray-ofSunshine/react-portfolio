import Project from "./Project"
import actorDatabase from "./assets/images/actorDatabase.PNG"
function Projects() {

    const projectData = [
        {
            name: "Actor Database",
            description: "This app allows you to search for any actor or actress and return a page with relavent info.",
            deployedUrl: "https://m-ray-ofsunshine.github.io/actor-database/",
            repoUrl: "https://github.com/m-ray-ofSunshine/actor-database",
            img: actorDatabase
        },
        {
            name: "Weather Dashboard",
            description: "This app allows you to search for a city and it will display the weather data for that city.",
            deployedUrl: "https://m-ray-ofsunshine.github.io/weather-dashboard/",
            repoUrl: "https://github.com/m-ray-ofSunshine/weather-dashboard"
        },
        {
            name: "One Track",
            description: "This app allows you to search Spotify's library and play 30 secs of each song. You can add that song to your dashboard by creating an account.",
            deployedUrl: "https://arcane-castle-03954.herokuapp.com/",
            repoUrl: "https://github.com/m-ray-ofSunshine/one-track"
        },
        
    ]



    return (
        <div className="">
            <h3>Projects Lists</h3>
            <Project
                projectData={projectData}
            ></Project>
        </div>
    )
}
export default Projects;