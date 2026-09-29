import './main.css'

function main(){
    return(
        <main className='main'>
            <section className='hero'>
                <h1>Criamos sites que funcionam</h1>
                <p>Layouts responsivos, rapidos e acessiveis para seu negocio crescer</p>

                <div className='hero-buttons'>
                    <a href="#orcamento" className='btn-primary'>peça seu orçamento</a>
                    <a href="#orcamento" className='btn-secondary'>ver portifolio</a>
                </div>
            </section>

            <section className='serviços'>
            <h2>Nossos serviços</h2>

            <div className='servico-grid'>
                <div className='servico-card'>
                    <span>🎶</span>
                    <h3>Desing de interface</h3>
                    <p>telas claras,pensadas para o usuario</p>
                </div>

                <div className='servico-card'>
                    <span>❤️</span>
                    <h3>Responsividade</h3>
                    <p>mesmo site em qualquer tela</p>
                </div>

                <div className='servico-card'>
                    <span>🌙</span>
                    <h3>Performance</h3>
                    <p>paginas leves que carregam rápido</p>
                </div>
            </div>
            </section>
        </main>
    )
}

export default main