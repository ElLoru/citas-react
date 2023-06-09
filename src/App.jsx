import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
	const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
	const [paciente, setPaciente] = useState({})

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes))
	}, [pacientes])

	const eliminarPaciente = (id) => {
		const arrayFiltrado = pacientes.filter((paciente) => paciente.id !== id)
		setPacientes(arrayFiltrado)
	}

	return (
		<div className='container mx-auto mt-10'>
			<Header />
			<div className='mt-10 md:flex'>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	)
}

export default App
