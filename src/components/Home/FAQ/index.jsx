/** @format */
import {faqItemData} from "../../../Data/data";
import styles from "../../../Styles/Home/FAQ/FAQ.module.scss";
import Accordion from "../../Accordion/Accordion";
import ContainerSection from "../../Container";

function FAQ() {
	return (
		<div className={styles.FAQ}>
			<div className={styles.FAQ_title}>Frequently Asked Questions</div>
			<ContainerSection>
				<div className={styles.FAQ_row}>
					{faqItemData.map((e) => {
						return <Accordion key={e.id} title={e.title} text={e.body} />;
					})}
				</div>
			</ContainerSection>
		</div>
	);
}

export default FAQ;
