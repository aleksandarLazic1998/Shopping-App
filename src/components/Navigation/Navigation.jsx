import React from "react";

// Styles
import styles from "./Css/Navigation.module.css"

const Navigation = () => {
	return (
		// Propmenii klase da budu dinamicne kada uradis css folder
		<nav className={styles['navigation-bar']}>
			<h2 className={styles['navigation-bar__title']}>Order Food</h2>
			<button>Card Component</button>
		</nav>
	);
};

export default Navigation;
