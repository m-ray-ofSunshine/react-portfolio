

function Project(props) {

    return props.projectData.map((project, i) => (

        <div className={"carousel-item"+ (i === 0 ? "active": "")} key={i}>
            <img src="..." className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5><a href={project.deployedUrl} target="_blank">{project.name}</a></h5>
                    <a href={project.repoUrl} className="btn btn-primary">View the code.</a>
                </div>
            </div>



            ))
            
}

                        export default Project;
