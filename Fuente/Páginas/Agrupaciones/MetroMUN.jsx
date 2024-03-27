import './MetroMUN.css'
import FeedbackComponent from '../../../Fuente/Componentes/FeedbackComponent.jsx'

function MetroMUN(){
    return(
        <>
            <div></div>
            <div className='MetroMUNTitleGroup'>
                <div className='TitleElements'>
                    <h1 className='MainTitle'>
                        MetroMUN, delegación de Derechos Humanos
                    </h1>
                    <img className="GroupIcon" src='/Recursos/Recursos Privados/Contenido de Agrupaciones/MetroMUN/Logo MetroMun.jpg' alt="Icono MetroMUN" />
                </div>
            </div>

            <div className='MetroMUNContentGroup'>
            <div className='MUNSection1-Struct1'>
                    <div className='MUNSection1-Title1'>
                        <h2 className='MUNSection1-Title'>
                            El Mundo en un Lugar
                        </h2>
                    </div>
                    <div className='MUNSection1-Content'>
                        <p className='MUNSection1-Pargraph'>
                        MetroMUN es una delegación internacional, al mismo tiempo que agrupación estudiantil, dedicada al estudio, discusión y aplicación del Modelo de las Naciones Unidas (Model of the United Nations, MUN). En ella se reúnen estudiantes de todas las carreras, y hacen vida buscando soluciones efectivas, sostenibles y eficientes para problemas reales en el mundo.
                        </p>
                    </div>
                </div>
                <div className='MUNSection1-Struct2'>
                    <div className='MUNSection1-Title2'>
                        <h2 className='MUNSection1-Title'>
                        La Excelencia Marca la Pauta
                        </h2>
                    </div>
                    <div className='MUNSection1-Content2'>
                        <p className='MUNSection1-Pargraph'>
                        En MetroMUN, los mejores se destacan. Esta delegación ha ganado incontables premios a lo largo de su trayectoria, entre los más notables, el premio a Mejor Delegación Grande de las Naciones Unidas dos años consecutivos, algo inédito en la historia de MUN. Los miembros de esta agrupación son personajes íntegros y preparados, capaces de llevar sus ideas y soluciones a todas partes del planeta y defenderlas, demostrando una amplia gama de conocimientos y competencias adquiridas, que los posicionan fuertemente como líderes y arquitectos de futuro.                         </p>
                    </div>
                </div>
            </div>

            <div className='MetroMUNFeedback'>
                <FeedbackComponent GroupID = "MetroMUN"/>
            </div>

            <div className='MetroMUNContribution'>

            </div>
        </>
    )
}
export default MetroMUN