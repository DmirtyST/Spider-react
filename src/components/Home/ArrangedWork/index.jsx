/** @format */
import styles from "../../../Styles/Home/ArrangedWork/ArrangedWork.module.scss";
import ContainerSection from "../../Container";
import ArrangedItem from "./ArrangedItem";
function ArrangedWork() {
	return (
		<div className={styles.arrangedWork}>
			<div className={styles.arrangedWork_title}>How it works?</div>
			<ContainerSection>
				<div className={styles.arrangedWork_row}>
					<ArrangedItem styles={styles} />
				</div>
			</ContainerSection>
		</div>
	);
}

export default ArrangedWork;
