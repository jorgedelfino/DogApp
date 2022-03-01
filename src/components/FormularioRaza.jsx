import { useEffect, useState } from "react"
import styled from "styled-components"

const BreedDogForm = styled.form`
	margin-top: 16px;
	display: flex;
	align-items: flex-start;
	@media only screen and (max-width: 767px) {
		align-items: center;
		flex-direction: column;
	}
`

const BreedDogSelect = styled.select`
	padding: 8px 10px;
	font-size: 20px;
	border-radius: 8px;
	margin-bottom: 16px;
	border-color: #4895EF;
	margin-right: 30px;
	&:focus {
		border-color: #4CC9F0;
	}
	@media only screen and (max-width: 767px) {
		margin-right: 0;
	}
`

const BreedDogButton = styled.input`
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

const FormularioRaza = ({setDogImg, setCargando}) => {

	const [breedList, setBreedList] = useState([])
	const [breed, setBreed] = useState('')
	const [breedUrl, setBreedUrl] = useState('https://dog.ceo/api/breeds/list/all')
	const [url, setUrl] = useState('')

	const getBreedList = async () => {
		const respuesta = await fetch(breedUrl)
		const resultado = await respuesta.json()
		const breedArray = []
		for (let breed in resultado.message) {
			breedArray.push(breed)
		}
		setBreedList(breedArray)
	}

	const handleSubmit = e => {
		e.preventDefault()
		getDog()
	}

	const getDog = async () => {
		if (url) {
			setCargando(true)
			const respuesta = await fetch(url)
			const resultado = await respuesta.json()
			setCargando(false)
			setDogImg(resultado.message)
		}
	}

	useEffect( () => {
		getBreedList()
	}, [])

	useEffect( () => {
		if (breed) {
			setUrl(`https://dog.ceo/api/breed/${breed}/images/random`)
		} else {
			setUrl('')
		}
	}, [breed])

	return (
		<BreedDogForm
			onSubmit={handleSubmit}
		>
			<BreedDogSelect
				id="breedSelect"
				onChange={e => setBreed(e.target.value)}
			>
				<option value="">-- Seleccione Raza --</option>
				{
					breedList.length > 0 && breedList.map(breed => (
						<option
							key={breed}
							value={breed}
						>{breed}</option>
					))
				}
			</BreedDogSelect>
			<BreedDogButton
				type="submit"
				value="Buscar Raza"
				className="breedDog"
			/>
		</BreedDogForm>
	)
}

export default FormularioRaza
