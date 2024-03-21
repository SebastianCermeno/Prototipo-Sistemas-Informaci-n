import '../../Fuente/Páginas/LandingPage.css'

function LandingPage() {
    return(
        <>
            <div className='HeaderGroup'>
                <div className="TitleContainer">
                    <h1 className="MainTitle">
                        Título del Sitio Web: El Nexo de conexiones de la UNIMET
                    </h1>
                </div>
            </div>

            <div className='HomeSection1'>
                <div className='HomeSection1-Struct1'>
                    <div className='HomeSection1-Title1'>
                        <h2 className='Section1-Title'>
                            Un Centro de Conexiones
                        </h2>
                    </div>
                    <div className='HomeSection1-Content'>
                        <p className='Section1-Pargraph'>
                        Título del Sitio Web es un lugar donde podrás conocer a las agrupaciones  estudiantiles que hacen de la Universidad Metropolitana (UNIMET) su hogar. <br /> 
                        Las agrupaciones estudiantiles representan una parte indispensable de lo que hace a la UNIMET lo que es hoy en día, tanto académica como socialmente. Estos grupos de estudiantes, para estudiantes, aumentan el universo de conocimientos disponibles a la institución y generan un espacio vivo y valioso para todas las partes involucradas.
                        </p>
                    </div>
                </div>
                <div className='HomeSection1-Struct2'>
                    <div className='HomeSection1-Title2'>
                        <h2 className='Section1-Title'>
                            Sobre Sitio Web
                        </h2>
                    </div>
                    <div className='HomeSection1-Content2'>
                        <p className='Section1-Pargraph'>
                        Este sitio web, como todo lo que concierne a las agrupaciones estudiantiles, fue hecho por estudantes de la institución, con el objetivo de que este tan importante sistema de la UNIMET tuviera el alcance que merece. Es importante que todo profesional que desee desempeñarse en la modernidad tenga acceso una amplia gama de competencias y aprendizajes; por ende, es necesario también acercar a todos aquellos que aspiren a la excelencia en la UNIMET con otros que busquen abrir sus horizontes y destacar su potencial.
                        </p>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default LandingPage