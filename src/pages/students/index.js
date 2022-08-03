import styles from '../../styles/Students.module.css';
import { useState } from 'react';
import DataTable from '../../components/Table';

export default function Students() {
	// const [students, setStudents] = useState(data);
	// const [addMode, setAddMode] = useState(false);
	// const [selectedElem, setSelectedElem] = useState(null);
	// const [editMode, setEditMode] = useState(false);

	return (
		<>
			<div className={styles.hero}>
				<div className={styles.titleArea}>
					<h1 className={styles.title}>Students Dashboard</h1>
				</div>
				<div className={styles.buttonArea}>
					<button className={styles.button}>Add Student</button>
				</div>
				<DataTable />
			</div>
		</>
	);
}
