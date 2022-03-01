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
		margin-right: 30px;
	}

	div {
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around
	}

	@media only screen and (max-width: 767px) {
		h1 {
			margin-right: 0px;
			margin-bottom: 24px;
		}
		div {
			flex-direction: column;
			align-items: center;
		}
	}
`

const Formularios = ({setDogImg, setCargando}) => {
	return (
		<Container>
			<div>
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
