import axios from 'axios';
import studentsData from '../database/schemas/StudentsData';

/**
 *
 * @param {string} username
 */
export async function loginUser(username) {
	const { data } = await axios.get('http://localhost:3000/api/validateUser', {
		method: 'POST',
		body: JSON.stringify({
			username,
		}),
	});

	const schemaData = await studentsData.findOne({ username: data.username });
}

/***
um so if I create the user schema if it doesn't exist and return the schema, or just directly return the schema's username
 */
