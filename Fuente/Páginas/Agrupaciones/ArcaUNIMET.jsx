import './ArcaUNIMET.css'
import FeedbackComponent from '../../../Fuente/Componentes/FeedbackComponent.jsx'

function ArcaUNIMET(){
    return(
        <>
            <div></div>
            <div className='ArcaTitleGroup'>
                <div className='TitleElements'>
                    <h1 className='MainTitle'>
                        ARCA UNIMET, Protección y Salud Animal
                    </h1>
                    <img className="GroupIcon" src='/Recursos/Recursos Privados/Contenido de Agrupaciones/ArcaUNIMET/ArcaLogo.png' alt="Icono Arca UNIMET" />
                </div>
            </div>

            <div className='ArcaContentGroup'>
            <div className='ArcaSection1-Struct1'>
                    <div className='ArcaSection1-Title1'>
                        <h2 className='ArcaSection1-Title'>
                            Bienestar Animal
                        </h2>
                    </div>
                    <div className='ArcaSection1-Content'>
                        <p className='ArcaSection1-Pargraph'>
                            La Asociación de Rescate y Condicionamiento Animal (A.R.C.A.) de la UNIMET se encarga, como su nombre indica, de dar protección a animales, principalmente domésticos, velar por su salud y aportar lecciones instructivas al público interesado sobre lo que se debe y no debe hacer con mascotas de todo tipo. Aunque su cuidado se ha centrado más en el trato de caninos y felinos, debido a su presencia abundante en la universidad, así como su frecuencia como mascotas, ARCA puede ofrecer apoyo en casi todos los elementos de cuidado animal que se lleguen a necesitar.                        
                        </p>
                    </div>
                </div>
                <div className='ArcaSection1-Struct2'>
                    <div className='ArcaSection1-Title2'>
                        <h2 className='ArcaSection1-Title'>
                            Apoyo y Responsabilidad
                        </h2>
                    </div>
                    <div className='ArcaSection1-Content2'>
                        <p className='ArcaSection1-Pargraph'>
                        La visión de esta agrupación se enfoca en transmitir el sentido de responsabilidad con todos los animales hacia todo el público interesado. Para ello, los estudiantes de ARCA lideran dando el ejemplo, siempre entrando a la acción cuando pueden aportar y posicionándose como un grupo de aliados en los que se puede depender.
                       </p>
                    </div>
                </div>
            </div>

            <div className='ArcaFeedback'>
                <FeedbackComponent GroupID = "CHEM-E-Car"/>
            </div>

            <div className='ChemCarContribution'>

            </div>
        </>
    )
}
export default ArcaUNIMET