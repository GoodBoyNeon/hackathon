import next from 'next';
import { connectToDatabase } from '../../database/connectToDatabase';
import studentsData from '../../database/schemas/studentsData';

import { NextApiRequest, NextApiResponse } from 'next';

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function validateUser(req, res) {
	if (req.method != 'POST') {
		return res.status(405).json({
			error: 'Invalid Method',
			method: req.method,
			valid_methods: ['POST'],
		});
	}

	const username = req.body.username;

	if (!username) {
		return res.status(400).json({ status: 'failed', reason: 'Invalid/empty data' });
	}

	await connectToDatabase().catch(err => console.error(err));
	const data = await studentsData.findOne({ username: username });

	if (!data) {
		createUser(username);
		return res.status(200).json({ new: true, username });
	}
	res.status(200).json({ new: false, username });
}

/**
 *
 * @param {string} username
 * @returns {string}
 */
async function createUser(username) {
	const newUser = new studentsData({
		username,
		students: [],
	});

	newUser.save();

	// return newUser;
}
