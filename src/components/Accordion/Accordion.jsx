/** @format */

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import styles from "./Accordion.module.scss";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
let Accordion = (props) => {
	let [active, setActive] = useState(false);
	let toggleAccordion = (e) => {
		setActive(!active);
	};

	return (
		<div className={styles.Accordion}>
			<div className={active === false ? styles.title : styles.title + " " + styles.titleActive} onClick={toggleAccordion}>
				{props.title}
				<span className={active === false ? styles.burger : styles.burger + " " + styles.burgerActive}>
					<i>
						<FontAwesomeIcon icon={faAngleDown} />
					</i>
				</span>
			</div>
			<div className={active === false ? styles.text : styles.text + " " + styles.textActive}>{props.text} </div>
		</div>
	);
};

export default Accordion;
