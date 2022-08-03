import { useState } from 'react';

export const UsernameHook = () => {
	const [username, setUsername] = useState('');

	return [username, setUsername];
};
