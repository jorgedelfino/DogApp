import { useState, useEffect } from 'react'

import styled from 'styled-components'

import ImagenPerro from "./components/ImagenPerro"
import Formularios from "./components/Formularios"

const Container = styled.div`
	height: 100vh;
`

const App = () => {

	const [dogImg, setDogImg] = useState('')
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		if (cargando) setDogImg('')
	}, [cargando])

	return (
		<Container>
			<ImagenPerro
				dogImg={dogImg}
				cargando={cargando}
			/>
			<Formularios
				setCargando={setCargando}
				setDogImg={setDogImg}
			/>
		</Container>
	)
}

export default App