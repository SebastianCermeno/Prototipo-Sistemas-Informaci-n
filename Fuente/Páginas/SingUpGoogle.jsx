import { GoogleLogin } from 'react-google-login';

const SignUpGoogle = () => {
	const responseGoogle = (response) => {
		console.log(response);
		// Aquí puedes manejar la respuesta de Google, por ejemplo, enviarla al servidor para el registro o inicio de sesión del usuario.
	};

	return (
		<div>
			<GoogleLogin
				clientId="873925156941-4aj7d3cpbfdnj4k4b7tcdmihue237vpl.apps.googleusercontent.com"
				buttonText="Sign Up with Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export default SignUpGoogle;
