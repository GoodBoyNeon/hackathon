import React, { useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	Typography,
	TableHead,
	TableRow,
	Paper,
	Grid,
	Button,
	makeStyles,
} from '@material-ui/core';
import styles from '../styles/Table.module.css';
import colors from '../lib/colors.json';
import axios from 'axios';
import { API_URL } from '../lib/config.json';
import studentsData from '../database/schemas/StudentsData';

(async () => {
	const { data } = await axios.get(`${API_URL}/validateUser`);
	const students = await studentsData.findOne({ username: data.username });
})();

const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 650,
	},
	container: {
		borderRadius: 15,
		margin: '10px 10px',
		maxWidth: 1200,
	},
	tableHeadCell: {
		fontWeight: 'bold',
		backgroundColor: colors.themeColor,
		color: theme.palette.getContrastText(colors.themeColor),
	},
	sno: {
		fontWeight: 'bold',
	},
	name: {
		fontWeight: 'bold',
		color: colors.themeColorDarker,
	},
	primaryColorDarker: {
		color: colors.themeColorDarker,
	},
	deleteButton: {
		backgroundColor: '#f33333',
	},
}));

function DataTable() {
	const username = '';
	const studentsData = studentsDataSchema.findOne({ username });

	const [students, setStudents] = useState(studentsData);
	const classes = useStyles();

	const addNewStudentToTable = (
		e,
		{ name, email, phone, grade, courses, classes, percentage },
	) => {
		e.preventDefault();

		const newStudent = {
			name,
			email,
			phone,
			grade,
			courses,
			classes,
			percentage,
		};
		const newStudents = [...students, newStudent];
		setStudents(newStudents);
	};

	return (
		<div className={styles.flexbox}>
			<TableContainer className={classes.container} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.tableHeadCell}>S.No</TableCell>
							<TableCell className={classes.tableHeadCell}>Student Details</TableCell>
							<TableCell className={classes.tableHeadCell}>Classes</TableCell>
							<TableCell className={classes.tableHeadCell}>Performance</TableCell>
							<TableCell className={classes.tableHeadCell}>Other Data</TableCell>
							<TableCell className={classes.tableHeadCell}>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{students.map((info, i) => (
							<TableRow key={info.id}>
								<TableCell className={classes.sno}>{i + 1}.</TableCell>
								<TableCell>
									<Grid container>
										<Grid item lg={10}>
											<Typography className={classes.name}>{info.name}</Typography>
											<Typography color="textSecondary" variant="body2">
												{info.email}
											</Typography>
											<Typography color="textSecondary" variant="body2">
												{info.phone}
											</Typography>
										</Grid>
									</Grid>
								</TableCell>

								<TableCell>
									<Typography className={classes.primaryColorDarker} variant="subtitle2">
										Grade {info.grade}
									</Typography>
									<Typography color="textSecondary" variant="body2">
										{info.courses} {info.courses > 1 ? 'courses' : 'course'}
									</Typography>
									<Typography color="textSecondary" variant="body2">
										{info.classes} {info.classes > 1 ? 'classes' : 'class'}
									</Typography>
								</TableCell>

								<TableCell>
									<Typography className={classes.primaryColorDarker} varient="subtitle2">
										{info.percentage}
										{'% '}
										obtained
									</Typography>
									<Typography color="textSecondary" variant="body2">
										{'Remarks: '}
										{() => getRemarks(info.percentage)}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography varient="body2">Student ID: {info.id}</Typography>
									<Typography>Notes: {info.notes ? info.notes : 'None'}</Typography>
								</TableCell>

								<TableCell>
									<Button className={classes.editButton} variant="contained">
										Edit
									</Button>
									<Button color="" variant="outlined">
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default DataTable;

function getRemarks(percentage) {
	if (percentage == 100) return 'Outstanding!';
	else if (percentage > 90) return 'A+';
	else if (percentage > 80) return 'A';
	else if (percentage > 70) return 'B+';
	else if (percentage > 60) return 'B';
	else if (percentage > 50) return 'C+';
	else if (percentage > 40) return 'C';
	else if (percentage > 30) return 'D+';
	else if (percentage < 30) return 'insufficient';
}
