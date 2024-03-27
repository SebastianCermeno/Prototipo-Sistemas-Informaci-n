import './Chem-E-Car.css'
import FeedbackComponent from '../../../Fuente/Componentes/FeedbackComponent.jsx'

function CHEMECar(){

    return(
        <>
            <div></div>
            <div className='ChemCarTitleGroup'>
                <div className='TitleElements'>
                    <h1 className='MainTitle'>
                        CHEM-E-Car, Química en Acción
                    </h1>
                    <img className="GroupIcon" src='/Recursos/Recursos Privados/Contenido de Agrupaciones/CHEM-E-Car/CHEM-E-CarLogo.png' alt="Icono Chem E Car" />
                </div>
            </div>

            <div className='ChemCarContentGroup'>
                <div className='ChemCarSection1-Struct1'>
                    <div className='ChemCarSection1-Title1'>
                        <h2 className='ChemCarSection1-Title'>
                            Ingeniería Dinámica
                        </h2>
                    </div>
                    <div className='ChemCarSection1-Content'>
                        <p className='ChemCarSection1-Pargraph'>
                            CHEM-E-Car para la UNIMET es muchas cosas: un equipo que compite en una disciplina internacional; un grupo de estudiantes buscando desarrollar sus habilidades técnicas; una excelente referencia de manejo de proyectos comprensivos. Y realmente, ¡lo es todo! Su misión es aportar un espacio donde las habilidades de ingeniería, planificación y control encuentren una plataforma sobre la cual crecer.                        </p>
                    </div>
                </div>
                <div className='ChemCarSection1-Struct2'>
                    <div className='ChemCarSection1-Title2'>
                        <h2 className='ChemCarSection1-Title'>
                        Crecimiento Sustentable
                        </h2>
                    </div>
                    <div className='ChemCarSection1-Content2'>
                        <p className='ChemCarSection1-Pargraph'>
                        A lo largo de su historia, esta agrupación ha planificado a futuro: buscando aprender y aportar al desarrollo de tecnologías sostenibles. Es meta y visión lograr establecer diseños ecológicos y eficientes a nivel nacional e internacional, demostrando su valor con acciones y excelentes vehículos, como es visto cada año al competir por el mejor carro químico de Latinoamérica.
                       </p>
                    </div>
                </div>
            </div>

            <div className='ChemCarFeedback'>
                <FeedbackComponent GroupID = "CHEM-E-Car"/>
            </div>

            <div className='ChemCarContribution'>

            </div>
        </>
    )
}
export default CHEMECar