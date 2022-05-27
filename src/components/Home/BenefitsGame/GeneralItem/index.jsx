/** @format */

import {BenefistGameGeneralItem} from "../../../../Data/data";

/** @format */

function GeneralItem({styles}) {
	return (
		<div className={styles.generalItem}>
			<div className={styles.generalItem_row}>
				{BenefistGameGeneralItem.map((e) => {
					if (e.names === "benefistImg") {
						return (
							<div key={e.id} className={styles.row_column}>
								<div className={styles.column_item}>
									<div className={styles.generalItem_image}>
										<img src={e.path} alt="" />
									</div>
								</div>
							</div>
						);
					}
					return (
						<div key={e.id} className={styles.row_column}>
							<div className={styles.column_item}>
								<div className={styles.generalItem_title}>{e.title}</div>
								<div className={styles.generalItem_text}>{e.text}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default GeneralItem;
