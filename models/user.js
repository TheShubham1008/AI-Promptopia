import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;


//The "models " Object is provided by the Mongoose Library and stores all the
// rgistered  models.
//If a model names "User" already exists in the "models" object ,it assigns that existing model to the "User" variable.
//This prevents redefinig the model and ensures that the existing model is reused
//If a model named "User" does not exist in the "models" obj3ect ,the "model functuion from Mongoose is called to create a new model"
//The newly created model is then assigned to the "User" via table.