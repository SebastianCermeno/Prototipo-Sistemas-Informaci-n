import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../../Fuente/Componentes/NavigationBar.css'

function NavigationBar(){
    const [menuOpen, setMenuOpen] = useState(false);
 
    useEffect(() => {
        const handleResize = () => {
            if ((window.innerWidth > 1060) && (document.getElementById("SwapTarget").style.display == "none")) {
                document.getElementById("SwapTarget").style.display = "flex";
                setMenuOpen(false)
            } 
            else if ((window.innerWidth <= 1060) && (document.getElementById("SwapTarget").style.display != "none")){
                document.getElementById("SwapTarget").style.display = "none";
                setMenuOpen(false)
            }
        };
 
        window.addEventListener("resize", handleResize);
 
        // Cleanup: Remove event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function toggleMenu(){
        setMenuOpen(!menuOpen)
        const newMenuCarry = !menuOpen;
        if (newMenuCarry == true){
            document.getElementById("SwapTarget").style.display = "flex";
        }
        else{
            document.getElementById("SwapTarget").style.display = "none";
        }
    }

    return(
        <nav className="CoreNavBar">
            <div className="Inexorables">
                <div className="Icons">
                    <a className="UNIMET-Logo" target="_blank" href="https://www.unimet.edu.ve/">
                        <img className="UNIMET-Logo-Data" src="" alt="Universidad Metropolitana" />
                    </a>
                    <img className="Page-Logo" src="" alt="Logotipo del Sitio Web" />
                </div>
                <div className="MenuController" onClick={() => toggleMenu()}>
                    <span className="graphicBars"> </span>
                    <span className="graphicBars"> </span>
                    <span className="graphicBarsEnd"> </span>
                </div>
            </div>

            <div id="SwapTarget" className="NavigationDisplay">
                <div className="LinksAndDirections">
                    <Link className="StandardLink">
                        <div>
                            <p>
                                Página de Inicio
                            </p>
                        </div>
                    </Link>
                    <Link className="StandardLink">
                        <div>
                            Sobre Nosotros
                        </div>
                    </Link>
                    <Link className="StandardLink">
                        <div>
                            Encontrar Agrupaciones
                        </div>
                    </Link>
                    <Link className="MobileOnlyLink">
                        <div>
                            Registrarse
                        </div>
                    </Link>
                    <Link className="MobileOnlyLink">
                        <div>
                            Iniciar Sesión
                        </div>
                    </Link>
                    <Link className="MobileOnlyLink">
                        <div>
                            Ir a Perfil
                        </div>
                    </Link>
                </div>
                <div className="DesktopViewProfile">
                    <div className="ButtonContainer">
                        <Link className="DesktopProfileLink">Registrarse</Link>
                        <Link className="DesktopProfileLink">Iniciar Sesión</Link>
                    </div>
                    <img className="ProfilePic" src="" alt="Imágen de Perfil" />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar