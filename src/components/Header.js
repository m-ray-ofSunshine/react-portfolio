import Navigation from './Navigation';

function Header(props) {
//);
    return (
        <header className=" d-flex flex-column col p-2 align-items-start " style={{
            backgroundColor: 'rgba(120, 147, 176, 0.85)',
            width: "15%",
            float: "left",
            position: "absolute",
            top: "0px",
            bottom: "0px",




        }}>
            <h1 className="" style={{ color: "rgb(51, 59, 63)" }}>Matt Ray</h1>

            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>

        </header>
    )
}
export default Header;