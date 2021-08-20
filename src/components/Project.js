

function Project(props) {

    return props.projectData.map((project, i) => (
        


            <div className="card" key={i} >
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title"><a href={project.deployedUrl} target="_blank">{project.name}</a></h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.repoUrl} className="btn btn-primary">View the code.</a>
                </div>
            </div>


    
    ))

}

export default Project;
