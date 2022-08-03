import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import githubSvg from '../assets/github.svg';
import EnterName from '../components/EnterName';
import { useState } from 'react';

export default function Home() {
	const returnToHome = () => (window.location.href = '/');
	const redirectToStudentsPage = () => (window.location.href = '/students');
	const openGithubPage = () => window.open('https://github.com/GoodBoyNeon/hackathon', '_blank');

	const [openPopup, setOpenPopup] = useState(false);
	return (
		<div className={styles.hero}>
			<nav className={styles.nav}>
				<div className={styles.logoArea}>
					<div className={styles.logo} onClick={returnToHome}>
						Paragon
					</div>
				</div>
				<span className={styles.spacing}></span>
				<div className={styles.github}>
					<Image
						onClick={openGithubPage}
						src={githubSvg}
						alt="Github"
						className={styles.githubIcon}
						width="48px"
						height="48px"
					/>
				</div>
			</nav>

			<div className={styles.textArea}>
				<h1 className={styles.mainText}>
					Manage <span className={styles.diffText}>Everything</span> You Need. <br />
					With One Click
				</h1>
				<p className={styles.bottomText}>
					Paragon helps you manage your classroom with ease. We provide safe and secure environment
					for your everyone. Click the button to get started!
				</p>
			</div>
			<div className={styles.buttonArea}>
				<button onClick={() => setOpenPopup(true)} className={styles.button}>
					Enter Dashboard
				</button>
			</div>
			<EnterName openPopup={openPopup} />
		</div>
	);
}
