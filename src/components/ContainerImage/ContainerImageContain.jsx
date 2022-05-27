/** @format */

function ContainerImageContain(props) {
	return <img style={{position: "absolute", width: "100%", height: "100%", objectFit: "contain", zIndex: "-1"}} src={props.path} alt={props.alt} />;
}

export default ContainerImageContain;
