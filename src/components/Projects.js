
import actorDatabase from "./assets/images/actorDatabase.PNG"
import oneTrack from "./assets/images/oneTrack.png"
import smileyRecruiter from "./assets/images/ProfileScreenshot.png"
import weatherDashboard from "./assets/images/weatherDashboard.JPG"
import teamProfile from "./assets/images/teamProfileCombined.jpg"
import Carousel from 'react-bootstrap/Carousel';

function Projects() {

    const projectData = [
        {
            name: "Smiley Recruiter",
            description: "This is a job search web app that allows users to look for employment opportunities nationwide based on keywords and location input. If the user creates an account, they can also save job listings to their profile.",
            deployedUrl: "https://safe-journey-56448.herokuapp.com/",
            repoUrl: "https://github.com/m-ray-ofSunshine/group-pj3-smileyrecruiter",
            img: smileyRecruiter
        },
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
            repoUrl: "https://github.com/m-ray-ofSunshine/weather-dashboard",
            img: weatherDashboard
        },
        {
            name: "One Track",
            description: "This app allows you to search Spotify's library and play 30 secs of each song. You can add that song to your dashboard by creating an account.",
            deployedUrl: "https://arcane-castle-03954.herokuapp.com/",
            repoUrl: "https://github.com/m-ray-ofSunshine/one-track",
            img: oneTrack
        },
        {
            name: "Team Profile Generator",
            description: "This is a command line app that will generate a team profile html after answering some prompts.",
            repoUrl: "https://github.com/m-ray-ofSunshine/team-profile-generator",
            img: teamProfile
        },
        

    ]



    return (
        <div id="projects" className=" d-flex row justify-content-center" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
            borderRadius: "10px",
            
            marginTop: "5vh",
            marginBottom: "10vh",
            marginLeft: "9vw",
            marginRight: "9vw",
            padding: "2em"


        }}>
            <h3>Projects List</h3>



            <Carousel>
                <Carousel.Item>
                    <img
                        className="image"
                        src={projectData[0].img}
                        style={{
                            objectFit: "contain",
                            
                            width: "auto"
                        }}
                        alt="Smiley Recruiter"
                    />
                    <Carousel.Caption>
                        <div className="p-2" style={{
                            backgroundColor: 'rgba(120, 147, 176, 0.85)',
                            borderRadius: "10px",
                            fontSize: "1.75vh"

                        }}>
                            <h5 ><a href={projectData[0].deployedUrl} rel="noreferrer" target="_blank">{projectData[0].name}</a></h5>
                            <p className="text-dark font-weight-bolder">{projectData[0].description}</p>
                            <a href={projectData[0].repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary"  >View the code.</a>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={projectData[1].img}
                        style={{
                            objectFit: "contain",
                            
                            width: "auto"
                        }}
                        alt="Actor Database"
                    />
                    <Carousel.Caption>
                        <div className="p-2" style={{
                            backgroundColor: 'rgba(120, 147, 176, 0.85)',
                            borderRadius: "10px",
                        }}>
                            <h5 ><a href={projectData[1].deployedUrl} rel="noreferrer" target="_blank">{projectData[1].name}</a></h5>
                            <p className="text-dark font-weight-bolder">{projectData[1].description}</p>
                            <a href={projectData[1].repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary"  >View the code.</a>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={projectData[2].img}
                        style={{
                            objectFit: "contain",
                            
                            width: "auto"
                        }}
                        alt="Weather Dashboard"
                    />
                    <Carousel.Caption>
                        <div className="p-2" style={{
                            backgroundColor: 'rgba(120, 147, 176, 0.85)',
                            borderRadius: "10px",
                        }}>
                            <h5 ><a href={projectData[2].deployedUrl} rel="noreferrer" target="_blank">{projectData[2].name}</a></h5>
                            <p className="text-dark font-weight-bolder">{projectData[2].description}</p>
                            <a href={projectData[2].repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary"  >View the code.</a>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={projectData[3].img}
                        style={{
                            objectFit: "contain",
                            
                            width: "auto"
                        }}
                        alt="One Track"
                    />
                    <Carousel.Caption>
                        <div className="p-2" style={{
                            backgroundColor: 'rgba(120, 147, 176, 0.85)',
                            borderRadius: "10px",
                        }}>
                            <h5 ><a href={projectData[3].deployedUrl} rel="noreferrer" target="_blank">{projectData[3].name}</a></h5>
                            <p className="text-dark font-weight-bolder">{projectData[3].description}</p>
                            <a href={projectData[3].repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary"  >View the code.</a>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={projectData[4].img}
                        style={{
                            objectFit: "contain",
                            
                            width: "auto"
                        }}
                        alt="Team Profile Generator"
                    />
                    <Carousel.Caption>
                        <div className="p-2" style={{
                            backgroundColor: 'rgba(120, 147, 176, 0.85)',
                            borderRadius: "10px",
                        }}>
                            <h5 >{projectData[4].name}</h5>
                            <p className="text-dark font-weight-bolder">{projectData[4].description}</p>
                            <a href={projectData[4].repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary"  >View the code.</a>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


        </div>
    )
}
export default Projects;