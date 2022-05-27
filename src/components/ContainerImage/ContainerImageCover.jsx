/** @format */

function ContainerImageCover(props) {
	return <img style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1"}} src={props.path} alt={props.alt} />;
}

export default ContainerImageCover;
