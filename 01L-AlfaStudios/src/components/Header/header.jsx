import "./header.css"

function header(){
    return(
        <header className="Header">
            <div className="header-container">

            
            <div className="logo">
                <img className="logo-icon" src="../../../src/assets/imgs/360_F_950707390_EsXYNemHatWk8554bMJGADk2xXDActsU.jpg" alt="logo" />
                <span className="logo-text">Studio Alfa</span>
            </div>
            <nav className="nav">
               <a href="#">Inicio</a>
               <a href="#">Serviços</a>
               <a href="#">Sobre</a>
               <a href="#" className="btn-contatos">Contato</a>
            </nav>
            </div>
        </header>
    )
}

export default header