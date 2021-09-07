

function Navigation(props) {
   // console.log(props);
const pageUpdate = (e) => {
    e.preventDefault();
    //console.log(e.target.text);
    props.handlePageChange(e.target.text)
   
}

    return (
        <nav className=" navbar justify-content-around" >
  <a className="nav-link m-2" style={{color: "rgb(51, 59, 63)"}}  href="#" rel="noreferrer" onClick={pageUpdate}>About me</a>
  <a className="nav-link m-2" style={{color: "rgb(51, 59, 63)"}} href="#" rel="noreferrer" onClick={pageUpdate}>Projects</a>
  <a className="nav-link m-2" style={{color: "rgb(51, 59, 63)"}} href="#" rel="noreferrer" onClick={pageUpdate}>Resume</a>
  <a className="nav-link m-2" style={{color: "rgb(51, 59, 63)"}} href="#" rel="noreferrer" onClick={pageUpdate}>Contact me</a>
</nav>
    )
}
export default Navigation;