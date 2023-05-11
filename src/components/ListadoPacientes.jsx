import Paciente from './Paciente'
import PropTypes from 'prop-types'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className='md:w-1/2 md:h-screen lg:w-3/5 overflow-y-scroll'>
			<h2 className='text-3xl text-center font-bold'>
				Listado de Pacientes
			</h2>
			<p className='text-lg text-center mt-5'>
				Administra tus{' '}
				<span className='text-blue-500'>Pacientes y Citas</span>
			</p>

			{pacientes && pacientes.length ? (
				pacientes.map((paciente) => (
					<Paciente
						key={paciente.id}
						paciente={paciente}
						setPaciente={setPaciente}
						eliminarPaciente={eliminarPaciente}
					/>
				))
			) : (
				<p className='bg-white shadow-md rounded-lg p-7 mx-3 my-2 font-bold uppercase text-center'>
					No hay pacientes en la lista
				</p>
			)}
		</div>
	)
}

ListadoPacientes.propTypes = {
	pacientes: PropTypes.array,
	setPaciente: PropTypes.func,
	eliminarPaciente: PropTypes.func,
}

export default ListadoPacientes
