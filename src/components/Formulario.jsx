import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState('')
	const [propietario, setPropietario] = useState('')
	const [email, setEmail] = useState('')
	const [fecha, setFecha] = useState('')
	const [sintomas, setSintomas] = useState('')

	const [error, setError] = useState(false)

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre)
			setPropietario(paciente.propietario)
			setEmail(paciente.email)
			setFecha(paciente.fecha)
			setSintomas(paciente.sintomas)
		}
	}, [paciente])

	const generarId = () => {
		const random = Math.random().toString(36).substring(2)
		const fecha = Date.now().toString(36)
		const id = random + fecha
		return id
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true)
			return
		}
		setError(false)

		const objetoPaciente = { nombre, propietario, email, fecha, sintomas }

		if (paciente.id) {
			objetoPaciente.id = paciente.id
			const arrayActualizado = pacientes.map((pacienteActual) =>
				pacienteActual.id === objetoPaciente.id
					? objetoPaciente
					: pacienteActual
			)
			setPacientes(arrayActualizado)
			setPaciente({})
		} else {
			objetoPaciente.id = generarId()
			setPacientes([...pacientes, objetoPaciente])
		}

		setNombre('')
		setPropietario('')
		setEmail('')
		setFecha('')
		setSintomas('')
	}

	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='text-3xl text-center font-bold'>
				Seguimiento de Pacientes
			</h2>
			<p className='text-lg text-center mt-5'>
				Añade pacientes y{' '}
				<span className='text-blue-500'>Administralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded-lg px-4 py-1 my-2'>
				{error && (
					<Error>
						<p>Todos los campos son obligatorios</p>
					</Error>
				)}
				<div className='my-4'>
					<label
						htmlFor='nombre-mascota'
						className='block font-bold text-gray-700 uppercase'>
						Nombre Mascota
					</label>
					<input
						id='nombre-mascota'
						type='text'
						placeholder='Nombre de la Mascota'
						className='p-1 mt-2 border-2 rounded-lg w-full placeholder-gray-500'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className='my-4'>
					<label
						htmlFor='nombre-propietario'
						className='block font-bold text-gray-700 uppercase'>
						Nombre Propietario
					</label>
					<input
						id='nombre-propietario'
						type='text'
						placeholder='Nombre del Propietario'
						className='p-1 mt-2 border-2 rounded-lg w-full placeholder-gray-500'
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className='my-4'>
					<label
						htmlFor='email'
						className='block font-bold text-gray-700 uppercase'>
						Email Propietario
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email de Contacto'
						className='p-1 mt-2 border-2 rounded-lg w-full placeholder-gray-500'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='my-4'>
					<label
						htmlFor='fecha-alta'
						className='block font-bold text-gray-700 uppercase'>
						Nombre Propietario
					</label>
					<input
						id='fecha-alta'
						type='date'
						className='p-1 mt-2 border-2 rounded-lg w-full'
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className='my-4'>
					<label
						htmlFor='sintomas'
						className='block font-bold text-gray-700 uppercase'>
						Síntomas
					</label>
					<textarea
						id='sintomas'
						placeholder='Describe los Síntomas'
						className='p-1 mt-2 border-2 rounded-lg w-full'
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type='submit'
					value={
						paciente.id ? 'Finalizar Edicion' : 'Agregar Paciente'
					}
					className='w-full my-3 py-2 border-2 bg-blue-600 rounded-lg text-white font-bold uppercase hover:bg-blue-500 active:bg-blue-700 transition-colors hover:cursor-pointer'
				/>
			</form>
		</div>
	)
}

Formulario.propTypes = {
	pacientes: PropTypes.array,
	setPacientes: PropTypes.func,
	paciente: PropTypes.object,
	setPaciente: PropTypes.func,
}

export default Formulario
