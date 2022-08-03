import React, { useState } from 'react';
import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
import styles from '../styles/EnterName.module.css';
import { loginUser } from '../lib/loginUser';
import { UsernameHook } from '../hooks/username';

function EnterName(props) {
	const [username, setUsername] = UsernameHook();

	let value;
	const handleInputs = e => {
		value = e.target.value;
		setUsername(value);
	};
	return (
		<Dialog open={props.openPopup}>
			<DialogContent className={styles.container}>
				<form action="/students" onSubmit={() => loginUser(username)}>
					<div className={styles.titleArea}>
						<h1 className={styles.title}>Please Enter Your Username</h1>
					</div>
					<input
						type="text"
						placeholder="Enter your Username"
						required="required"
						className={styles.inp}
						onChange={handleInputs}
					/>
					<div className={styles.buttonArea}>
						<button className={styles.button}>Done</button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default EnterName;
