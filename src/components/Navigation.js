

function Navigation(props) {
   // console.log(props);
const pageUpdate = (e) => {
    e.preventDefault();
    //console.log(e.target.text);
    props.handlePageChange(e.target.text)
   
}

    return (
        <nav className="col flex-column nav justify-content-around" >
  <a className="nav-link " style={{color: "rgb(51, 59, 63)"}}  href="#" onClick={pageUpdate}>About me</a>
  <a className="nav-link" style={{color: "rgb(51, 59, 63)"}} href="#" onClick={pageUpdate}>Projects</a>
  <a className="nav-link" style={{color: "rgb(51, 59, 63)"}} href="#" onClick={pageUpdate}>Resume</a>
  <a className="nav-link" style={{color: "rgb(51, 59, 63)"}} href="#" onClick={pageUpdate}>Contact me</a>
</nav>
    )
}
export default Navigation;