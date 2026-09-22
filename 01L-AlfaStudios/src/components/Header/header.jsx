
function header(){
    return(
        <header className="header">
            <div className="logo">
                <img className="logo-icon" src="" alt="logo" />
                <span className="logo-text">Studio Alfa</span>
            </div>
            <nav className="nav">
               <a href="#">Inicio</a>
               <a href="#">Serviços</a>
               <a href="#">Sobre</a>
               <a href="#" className="btn-contatos">Contato</a>
            </nav>
        </header>
    )
}

export default header