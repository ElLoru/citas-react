import PropTypes from 'prop-types'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente

	const handleEliminar = () => {
		const confirmar = confirm('¿Esta seguro que quiere eliminar?')
		if (confirmar) {
			eliminarPaciente (id)
		}
	}

	return (
		<div className='bg-white shadow-sm rounded-lg px-4 py-3 mx-3 my-2'>
			<p className='font-bold uppercase my-2'>
				Nombre Mascota:{' '}
				<span className='font-normal normal-case'>{nombre}</span>
			</p>
			<p className='font-bold uppercase my-2'>
				Nombre Propietario:{' '}
				<span className='font-normal normal-case'>{propietario}</span>
			</p>
			<p className='font-bold uppercase my-2'>
				Email: <span className='font-normal normal-case'>{email}</span>
			</p>
			<p className='font-bold uppercase my-2'>
				Fecha Alta:{' '}
				<span className='font-normal normal-case'>{fecha}</span>
			</p>
			<p className='font-bold uppercase my-2'>
				Síntomas:{' '}
				<span className='font-normal normal-case'>{sintomas}</span>
			</p>
			<div className='mt-3 mx-auto flex justify-between'>
				<button
					type='button'
					onClick={() => setPaciente(paciente)}
					className='py-2 px-10 m-2 bg-blue-600 text-white font-bold rounded-md uppercase hover:bg-blue-500 active:bg-blue-700 transition-colors'>
					Editar
				</button>
				<button
					type='button'
					onClick={handleEliminar}
					className='py-2 px-10 m-2 bg-red-600 text-white font-bold rounded-md uppercase hover:bg-red-500 active:bg-red-700 transition-colors'>
					Eliminar
				</button>
			</div>
		</div>
	)
}

Paciente.propTypes = {
	paciente: PropTypes.object,
	setPaciente: PropTypes.func,
	eliminarPaciente: PropTypes.func
}

export default Paciente
