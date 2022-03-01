import FormularioRandom from "./FormularioRandom"
import FormularioRaza from "./FormularioRaza"

import styled from "styled-components"

const Container = styled.div`
	transform: translateY(-30px);
	border-radius: 30px 30px 0 0;
	background-color: #fff;
	padding-top: 30px;
	padding-bottom: 40px;
	border-top: 5px solid;
	border-color: #457b9d;
	
	h1 {
		margin: 0;
		margin-bottom: 24px;
	}

	div {
		width: 80%;
		margin: 0 auto;
	}

	@media only screen and (max-width: 767px) {
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`

const Formularios = ({setDogImg, setCargando}) => {
	return (
		<Container>
			<div>
				<h1>Random Dog</h1>
				<FormularioRandom
					setDogImg={setDogImg}
					setCargando={setCargando}
				/>
				<FormularioRaza
					setDogImg={setDogImg}
					setCargando={setCargando}
				/>	
			</div>
		</Container>
	)
}

export default Formularios
