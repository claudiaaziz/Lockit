import dotenv from 'dotenv';
dotenv.config();

export const config = {
	db: {
		user: 'root',
		host: 'localhost',
		password: 'password',
		database: 'PasswordManager',
	},
	auth: {
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
		tokenUrl: 'https://oauth2.googleapis.com/token',
		redirectUrl: process.env.REDIRECT_URL,
		clientUrl: process.env.CLIENT_URL,
		tokenSecret: process.env.TOKEN_SECRET,
		tokenExpiration: 24 * 60 * 60 * 1000,
		postUrl: 'https://jsonplaceholder.typicode.com/posts',
	},
	server: {
		port: 5001,
	},
};
