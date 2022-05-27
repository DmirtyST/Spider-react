/** @format */
import styles from "../../../Styles/Header/HeaderBurger.module.scss";
function HeaderBurger({toggleMenu, menu}) {
	return (
		<div onClick={toggleMenu} className={menu === false ? styles.HeaderBurger : styles.HeaderBurger + " " + styles.HeaderBurgerActive}>
			<div className={styles.HeaderBurger_line}></div>
		</div>
	);
}

export default HeaderBurger;
