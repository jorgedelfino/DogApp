import styled from "styled-components"
import background from '../img/bg.jpg'
import cargandoBackground from '../img/cargando2.gif'

const Container = styled.div`
	width: 100%;
	min-height: 350px;
	background: url(${background});
	background-repeat: repeat;
	img {
		min-height: 100%;
		max-height: 100vh;
		width: 100%;
	}
	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		img {
			width: auto;
		}
	}

	@media only screen and (max-width: 479px) {
		min-height: 150px;
	}
`

const CargandoGif = styled.div`
	background: url(${cargandoBackground});
	background-position: center;
	height: 350px;
	width: 100%;
	background-repeat: no-repeat;
`

const ImagenPerro = ({dogImg, cargando}) => {
	return (
		<Container>
			{dogImg && (
				<img
					src={dogImg}
					alt="perro"
				/>
			)}
			{
				cargando && (
					<CargandoGif>
						
					</CargandoGif>
				)
			}
		</Container>
	)
}

export default ImagenPerro