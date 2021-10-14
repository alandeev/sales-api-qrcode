import mongoose from "mongoose";

interface IUser {
  name: string,
  username: string,
  password: string,
  groups: string[],
  created_at: Date,
  updated_at: Date
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  groups: [{
    type: String
  }],
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
})

UserSchema.statics.findByUsername = function (username: string) {
  return this.findOne({
    where: { username }
  })
}

interface UserModel extends mongoose.Model<IUser> {
  findByUsername: (username: string) => Promise<IUser>
}

const User = mongoose.model<IUser, UserModel>('users', UserSchema)

export default User;