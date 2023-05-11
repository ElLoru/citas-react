import PropTypes from 'prop-types'

const Error = ({ children }) => {
	return (
		<div className='bg-red-700 text-white text-center font-bold uppercase rounded-lg my-2 p-1'>
			{children}
		</div>
	)
}

Error.propTypes = {
	children: PropTypes.any,
}

export default Error
