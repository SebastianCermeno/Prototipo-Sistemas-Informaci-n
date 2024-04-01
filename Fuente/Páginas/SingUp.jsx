import { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Register.css';
import SignUpGoogle from './SingUpGoogle';
function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const usuarioRef = doc(collection(db, 'usuarios'));
			await setDoc(usuarioRef, {
				nombre,
				apellido,
				email,
			});

			console.log('Usuario registrado con éxito:', userCredential.user);
			navigate('/');
		} catch (error) {
			console.error('Error al registrar el usuario:', error.message);
			alert(error.message);
		}
	};

	return (
		<div className="register">
			<h1>Registro Manual</h1>
			<div className="register-container">
				<form onSubmit={handleRegister} className="register-form">
					<input
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						placeholder="Nombre"
						className="register-input"
					/>
					<input
						type="text"
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
						placeholder="Apellido"
						className="register-input"
					/>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Correo Electrónico"
						className="register-input"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Contraseña"
						className="register-input"
					/>
					<button type="submit" className="register-button">
						Registrar
					</button>
				</form>
			</div>
			<div>
				<h1>Regsitro Automatico</h1>
				<SignUpGoogle />
			</div>
			<div></div>
		</div>
	);
}

export default Register;
