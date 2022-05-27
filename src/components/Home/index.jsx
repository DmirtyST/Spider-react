/** @format */

import styles from "../../Styles/Home/Home.module.scss";
import ArrangedWork from "./ArrangedWork";
import BenefitsGame from "./BenefitsGame/BenefitsGame";
import ChooseUs from "./ChooseUs";
import FAQ from "./FAQ";
import Partners from "./Partners";
import ScreenPage from "./ScreenPage";
import Statistician from "./Statistician";
import Team from "./Team";
import Token from "./Token";

function Home() {
	return (
		<div className={styles.home}>
			<ScreenPage />
			<Partners />
			<ArrangedWork />
			<BenefitsGame />
			<ChooseUs />
			<Statistician />
			<Team />
			<Token />
			<FAQ />
		</div>
	);
}

export default Home;
