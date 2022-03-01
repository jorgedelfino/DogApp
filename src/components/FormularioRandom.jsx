import { useState } from "react"
import styled from "styled-components"

const RandomDogForm = styled.form`
	@media only screen and (max-width: 767px) {
		display: flex;
		justify-content: center;
	}
`

const RandomDogButton = styled.input`
	cursor: pointer;
	text-transform: uppercase;
	font-size: 20px;
	padding: 8px 10px;
	color: white;
	background: #4895EF;
	border: none;
	border-radius: 8px;

	&:hover {
		background: #4CC9F0;
	}
`

const FormularioRandom = ({setDogImg, setCargando}) => {

	const [url, setUrl] = useState('https://dog.ceo/api/breeds/image/random')

	const handleSubmit = async e => {
		e.preventDefault()
		setCargando(true)
		const respuesta = await fetch(url)
		const resultado = await respuesta.json()
		setCargando(false)
		setDogImg(resultado.message)
	}

	return (
		<RandomDogForm
			onSubmit={handleSubmit}
		>
			<RandomDogButton
				type="submit"
				value="¡Al Azar!"
				className="randomButton"
			/>
		</RandomDogForm>
	)
}

export default FormularioRandom