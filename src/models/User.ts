import { Schema, model, Document, connect } from "mongoose";

interface IUser {
  username: string;
  password: string;
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

const User = model<IUser>("User", userSchema);

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect("mongodb://localhost:27017/test");

  const user = new User({
    name: "Bill",
    email: "bill@initech.com",
    avatar: "https://i.imgur.com/dM7Thhn.png",
  });
  await user.save();

  console.log(user.email); // 'bill@initech.com'
}
