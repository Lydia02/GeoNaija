import mongoose, { Document, Schema } from 'mongoose';

export interface IState extends Document {
  state: string;
  capital: string;
  slogan: string;
  dialect: string;
  past_governors: string;
  senatorial_districts: string;
  population: string;
  website: string;
  created_date: string;
  created_by: string;
  known_for: string;
}

const stateSchema: Schema<IState> = new mongoose.Schema<IState>({
  state: String,
  capital: String,
  slogan: String,
  dialect: String,
  past_governors: String,
  senatorial_districts: String,
  population: String,
  website: String,
  created_date: String,
  created_by: String,
  known_for: String,
});

export default mongoose.model<IState>('State', stateSchema);
