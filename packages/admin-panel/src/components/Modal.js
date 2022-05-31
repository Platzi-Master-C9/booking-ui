import styled from "styled-components";

export const Modal = ({estado, cambiarEstado, admin}) => {
	return (
	<div>
	    {estado &&
			<Overlay className="Overlay">
				<ContenedorModal className="ContenedorModal">
					<EncabezadoModal className="EncabezadoModal">
						<h1>Informacion personal</h1>
						<BotonCerrar  onClick={() => {cambiarEstado(false)}} className="BotonCerrar">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</BotonCerrar>
					</EncabezadoModal>
					<ContenidoModal className="ContenidoModal">
						<Informacion className="Informacion">
							<NombreAdmin className="nombre-admin">
								<p className="name">Nombre</p>
								<p className="admin-fullname"> {admin.fullName}</p>
							</NombreAdmin>
							<TipoAdmin className="tipo-admin">
								<p className="admin">Tipo de administrador</p>
								<p className="admin-type"> {admin.profile == 1 ? "Super Admin" : "Admin"}</p>
							</TipoAdmin>
						</Informacion>
						<EditarModal className="EditarModal">
							<img
							src={admin.urlImage}
							alt="profile picture"
							className="profile-picture_CardAdmin"
							/>
							<button className="admin-edit">Editar</button>
							<button>Validar</button>
							<button>Banear</button>
							<button className="admin-delete">Eliminar</button>
						</EditarModal>
					</ContenidoModal>
				</ContenedorModal>
			</Overlay>
		}
		</div>
	);
}

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.1);
	padding: 40px;
	display: flex;
	align-items: center; /* vertically center the overlay */
	justify-content: center; /* horizontally center the overlay */
`;

const ContenedorModal = styled.div`
	min-width: 300px;
	min-height: 80px;
	background-color: #fefefe;
	color: #444;
	border-radius: 30px;
	border: 1px solid #888;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
	position: relative;
	padding: 20px;
	border:2px solid #1572A1;
`;

const EncabezadoModal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #1572A1;
	h1 {
		padding-left: 10px;
		font-size: 1.5em;
		font-weight: bold;
		color: #1572A1;
	}
`;

const BotonCerrar = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	widht: 35px;
	height: 35px;
	border-radius: 5px;
	color: #1572A1;
	transition: 0.3s ease all;
	cursor: pointer;

	svg {
		width: 100%;
		height: 100%;
	}
`;

const EditarModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	button {
		margin: 10px;
		padding: 10px;
		border: none;
		background-color: #fff;
		color: #000;
		font-size: 1em;
		cursor: pointer;
	}
	.admin-edit {
		color: #1572A1;
	}
	.admin-delete {
		color: #FF0000;
	}
	.profile-picture_CardAdmin{
		width: 150px;
		height: 150px;
		padding: 0px;
		border: 2px solid #1572A1;
		margin-bottom: 20px;
	}
	@media (max-width: 600px) {
		.profile-picture_CardAdmin{
			width: 120px;
			height: 120px;
			margin-bottom: 10px;
		}
		button {
			padding: 5px;
	}
`;

const Informacion = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	margin-top: 1em;
	justify-content: space-between;
	padding: 1em;
	p {
		margin: 0;
		font-size: 1.2rem;
	}
	@media screen and (max-width: 450px) {
		padding: 0px;
		margin: 0px;
		p{
			font-size: 1rem;
		}
	}
`;

const ContenidoModal = styled.div`
	display: flex;
	padding: 10px;
	@media screen and (max-width: 450px) {
		padding: 0px;
	}
`;

const NombreAdmin = styled.div`
	.name {
		font-weight: bold;
		margin-bottom: 10px;
	}
`;

const TipoAdmin = styled.div`
	.admin {
		font-weight: bold;
		margin-bottom: 10px;
	}
`;