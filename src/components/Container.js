
import AboutPage from "./AboutPage"
import Projects from "./Projects"
import Resume from "./Resume"
import ContactForm from "./ContactForm"

function Container(props) {
    //console.log(props);
    const getPage =  ()=>{
        let page;
    if(props.currentPage === "About me"){
        page = <AboutPage/>
    }else if(props.currentPage === "Projects"){
        page = <Projects/>
    }else if(props.currentPage === "Resume"){
        page = <Resume/>
    }else if(props.currentPage === "Contact me"){
        page = <ContactForm/>
    }
     
 //console.log(page);
 return page;
}

    return (
        <div className="card m-5 " style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
            height: "50vh",
            width: "50vw",
            position: "absolute",
            top: "20%",
            left: "25vw",
           borderRadius: "10px"

        }}>
            <div className="card-body d-flex justify-content-start">
               {getPage()}
            </div>
        </div>
    )
}
export default Container;