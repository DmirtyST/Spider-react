/** @format */
import styles from "./Container.module.scss";
function ContainerSection({children}) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}

export default ContainerSection;
