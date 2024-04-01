import LandingPage from './LandingPage';

function Register() {

	return (
        <div>
            <section class="seccion-perfil-usuario">
                <div class="perfil-usuario-header">
                    <div class="perfil-usuario-portada">
                        <div class="perfil-usuario-avatar">
                        <img
                            src="./perfil.jpg" alt="img-avatar"
                        />
                            <button type="button" class="boton-avatar">
                                <i class="fa-solid fa-image" style="color: #ffffff;"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="perfil-usuario-body">
                    <div class="perfil-usuario-bio">
                        <h3 class="titulo">Nombre y Apellido</h3>
                        <p class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="perfil-usuario-footer">
                        <ul class="lista-datos">
                            <li><i class="icono fa-solid fa-envelope"></i> Email</li>
                            <li><i class="icono fa-solid fa-lock"></i> Contrasena</li>
                            <li><i class="icono fa-solid fa-user"></i> Usuario</li>
                            <li><i class="icono fa-solid fa-gamepad"></i>Club</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
	);
}

export default LandingPage;