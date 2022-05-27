/** @format */
import {NavLink} from "react-router-dom";
import {headerNav} from "../../../Data/data";
import styles from "../../../Styles/Header/HeaderDropMenu.module.scss";
import HeaderButton from "../HeaderButton/index";
function HeaderDropMenu({menu, toggleMenu}) {
	return (
		<div className={menu === false ? styles.HeaderDropMenu : styles.HeaderDropMenu + " " + styles.HeaderDropMenuActive}>
			<nav className={styles.HeaderDropMenu_nav}>
				<ul className={styles.nav_lists}>
					{headerNav.map((e) => {
						return (
							<li className={styles.lists_list} key={e.id}>
								<NavLink onClick={toggleMenu} className={styles.lists_link} to={e.path}>
									{e.names}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<HeaderButton styles={styles} />
			</nav>
		</div>
	);
}

export default HeaderDropMenu;
