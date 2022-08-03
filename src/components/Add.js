import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import styles from '../styles/Add.module.css';
import { studentsDataSchema } from '../database/schemas/studentsDataSchema';

export default function Add() {
	const [inputData, setInputData] = useState({
		name: '',
		email: '',
		phone: '',
		grade: '',
		courses: '',
		classes: '',
		percentage: '',
	});

	let name, value;
	const handleInputs = e => {
		name = e.target.name;
		value = e.target.value;
		setInputData({ ...inputData, [name]: value });
	};

	return (
		<div>
			<Dialog open={true}>
				<DialogContent className={styles.container}>
					<form onSubmit={() => sendData(inputData)}>
						<div className={styles.titleArea}>
							<h1 className={styles.title}>Add a Student</h1>
						</div>
						<div className={styles.subtitleArea}>
							<h3 className={styles.subtitle}>Basic Info</h3>
						</div>
						<div className={styles.inputs}>
							<input
								id="name"
								type="text"
								name="name"
								required="required"
								placeholder="Enter Student's Name"
								className={(styles.nameInp, styles.inp)}
								value={inputData.name}
								onChange={handleInputs}
							/>
							<input
								id="email"
								type="email"
								name="email"
								required="required"
								placeholder="Enter Student's Email"
								className={(styles.emailInp, styles.inp)}
								value={inputData.email}
								onChange={handleInputs}
							/>
							<input
								id="phone"
								type="number"
								name="phone"
								required="required"
								placeholder="Enter Student's Phone No."
								className={(styles.phoneInp, styles.inp)}
								value={inputData.phone}
								onChange={handleInputs}
							/>
							<h3 className={styles.subtitle}>Academic Info</h3>
							<div className={styles.inputs}>
								<input
									id="grade"
									type="number"
									name="grade"
									required="required"
									placeholder="Student's Grade"
									className={(styles.gradeInp, styles.inp)}
									value={inputData.grade}
									onChange={handleInputs}
								/>
								<input
									type="number"
									name="courses"
									id="courses"
									required="required"
									placeholder="No. of courses"
									className={(styles.courseInp, styles.inp)}
									value={inputData.courses}
									onChange={handleInputs}
								/>
								<input
									type="number"
									name="classes"
									id="classes"
									required="required"
									placeholder="No. of classes registered"
									className={(styles.classesInp, styles.inp)}
									value={inputData.classes}
									onChange={handleInputs}
								/>
							</div>
							<h3 className={styles.subtitle}>Performance</h3>
							<div className={styles.inputs}>
								<input
									type="number"
									id="percentage"
									name="percentage"
									required="required"
									placeholder="Total percentage obtained"
									className={(styles.percentage, styles.inp)}
									value={inputData.percentage}
									onChange={handleInputs}
								/>
							</div>
							<div className={styles.buttonArea}>
								<button type="submit" className={styles.button}>
									Done
								</button>
							</div>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}

function sendData(data) {}
