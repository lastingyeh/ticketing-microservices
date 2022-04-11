import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

declare global {
	var signin: () => Promise<string[]>;
}

let mongo: MongoMemoryServer;

beforeAll(async () => {
	process.env.JWT_KEY = 'asdfasdf';
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	mongo = await MongoMemoryServer.create(); // use async create() method instead
	const mongoUri = mongo.getUri(); // no longer an async method

	await mongoose.connect(mongoUri);
});

beforeEach(async () => {
	const collections = await mongoose.connection.db.collections();

	for (let collection of collections) {
		await collection.deleteMany({});
	}
});

afterAll(async () => {
	await mongoose.connection.close();
	await mongo.stop();
});

global.signin = async () => {
	const email = 'test@test.com';
	const password = 'password';

	const response = await request(app)
		.post('/api/users/signup')
		.send({ email, password }).expect(201);

	const cookie = response.get('Set-Cookie');

	return cookie;
};
