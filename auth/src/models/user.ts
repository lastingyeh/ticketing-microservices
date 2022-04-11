import mongoose from 'mongoose';
import { Password } from '../services/password';

interface UserAttrs {
	email: string;
	password: string;
}

// interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<any> {
	build(attrs: UserAttrs): any;
}

// interface that describes the properties
// that a User Dcoument has
interface UserDoc extends mongoose.Document {
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
        ret.id = ret._id;

        delete ret._id;
				delete ret.password;
        // use versionKey instead
        // delete ret.__v
			},
			versionKey: false,
		},
	}
);

userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'));

		this.set('password', hashed);
	}
	done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
