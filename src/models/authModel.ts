import { Document, Schema, model, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
