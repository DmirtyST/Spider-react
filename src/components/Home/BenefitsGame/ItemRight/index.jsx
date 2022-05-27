/** @format */

import {BenefistData} from "../../../../Data/data";
import ContainerImageCover from "../../../ContainerImage/ContainerImageCover";

/** @format */

function ItemRigth({styles}) {
	return (
		<div className={styles.itemRight}>
			<div className={styles.itemRight_row}>
				{BenefistData.RighttItemData.map((e) => {
					if (e.names === "fistColumn") {
						return (
							<div key={e.id} className={styles.row_column}>
								<div className={styles.column_item}>
									<div className={styles.item_image}>
										<ContainerImageCover path={e.path} />
									</div>
								</div>
							</div>
						);
					}
					return (
						<div key={e.id} className={styles.row_column}>
							<div className={styles.column_item}>
								<div className={styles.item_title}>{e.title}</div>
								<div className={styles.item_text}>{e.text}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ItemRigth;
