import Navigation from './Navigation';

function Header(props) {
//);
    return (
        <header className=" d-flex col-12 mt-2 p-2 justify-content-between fixed-top" style={{
            backgroundColor: 'rgba(120, 147, 176, 0.85)',
            width:"100%",
            borderRadius: "10px"
                

        }}>
            <h1 className="ms-2" style={{ color: "rgb(51, 59, 63)" }}>Matt Ray</h1>

            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>

        </header>
    )
}
export default Header;