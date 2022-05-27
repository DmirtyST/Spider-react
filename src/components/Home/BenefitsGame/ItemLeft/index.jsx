/** @format */

import {BenefistData} from "../../../../Data/data";

/** @format */

function ItemLeft({styles}) {
	return (
		<div className={styles.itemLeft}>
			<div className={styles.itemLeft_row}>
				{BenefistData.LetftItemData.map((e) => {
					if (e.names === "fistColumn") {
						return (
							<div key={e.id} className={styles.row_column}>
								<div className={styles.column_item}>
									<div className={styles.item_image}>
										<img src={e.path} alt="" />
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

export default ItemLeft;
