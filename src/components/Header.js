import Navigation from './Navigation';

function Header() {
    return (
        <header className="conatiner-fluid col-12" style={{
            backgroundColor: 'rgba(120, 147, 176, 0.85)',
            
            
        }}>
        <h1 style={{color: "rgb(51, 59, 63)"}}>Matt Ray</h1>
        
        <Navigation />
        
        </header>
    )
}
export default Header;