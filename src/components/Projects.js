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
        <div className=" d-flex justify-content-center" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
            borderRadius: "10px",
            height: "75vh",
            width: "75vw",
            marginTop: "5vh",
            marginBottom: "10vh",
            marginLeft: "9vw",
            marginRight: "9vw",
            padding: "2em"


        }}>
            <h3>Projects Lists</h3>


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <Project
                        projectData={projectData}
                    ></Project>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
        </div>
    )
}
export default Projects;