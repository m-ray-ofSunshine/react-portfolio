

function Header() {

    return (
        <header  className=" d-flex col-12 p-2 justify-content-between fixed-top" style={{
            backgroundColor: 'rgba(120, 147, 176, 0.85)',
            width: "100%",
            borderRadius: "10px"


        }}>
            
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container-fluid d-flex ">
                    <div className="justify-content-between" style={{width: "100%"}}>
                    <a className="navbar-brand" style={{ color: "rgb(51, 59, 63)" , float: "left"}} href="#aboutMe">Matt Ray</a>
                    <button style={{
                        float: "right"
                    }}
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link m-2" style={{ color: "rgb(51, 59, 63)" }} href="#aboutMe" rel="noreferrer" >About me</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link m-2" style={{ color: "rgb(51, 59, 63)" }} href="#projects" rel="noreferrer" >Projects</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link m-2" style={{ color: "rgb(51, 59, 63)" }} href="#resume" rel="noreferrer" >Resume</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link m-2" style={{ color: "rgb(51, 59, 63)" }} href="#contactForm" rel="noreferrer" >Contact me</a>
                            </li>

                            
                        </ul>

                    </div>
                </div>
            </nav>
           

        </header>
    )
}
export default Header;