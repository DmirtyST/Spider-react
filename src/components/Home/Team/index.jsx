/** @format */
import {investorsTeamData, TeamSliderData} from "../../../Data/data";
import styles from "../../../Styles/Home/Team/Team.module.scss";
import ContainerSection from "../../Container";
import ContainerImageCover from "../../ContainerImage/ContainerImageCover";
import TeamSlider from "./TeamSlider";

function Team() {
	return (
		<div className={styles.team}>
			<div className={styles.team_title}>Team</div>
			<ContainerSection>
				<TeamSlider items={TeamSliderData} />
				<div className={styles.team_title_investors}>{"Partners & Investors"}</div>
				<div className={styles.team_row}>
					{investorsTeamData.map((e) => {
						return (
							<div key={e.id} className={styles.team_column}>
								<div className={styles.column_item}>
									<img src={e.pathImg} alt="" />
								</div>
							</div>
						);
					})}
				</div>
			</ContainerSection>
		</div>
	);
}

export default Team;
