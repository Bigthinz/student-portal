import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
// eslint-disable-next-line unused-imports/no-unused-imports
import validator from 'validator';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'first name is required in this field'],
    unique: false,
  },
  lastname: {
    type: String,
    required: [true, 'last name is required in this field'],
    unique: false,
  },
studentId: {
    type: String,
    required: [true, 'course name is required in this field'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'course code is required in this field'],
    unique: false,
  },
 
 
});


userSchema.pre('save', async function (next) {
  //ONLY RUN IF THE PASSWORD WAS ACTUALLY MODIFIED
  if (!this.isModified('password')) return next();

  //HASH THE PASSWORD WITH A COST OF 12
  this.password = await bcrypt.hash(this.password, 12);
  //DELETE THE PREVIOUS CONFIRMED PASSWORD
  this.confirmPassword = undefined;

  next();
});

//CREATING a METHOD FOR LOGIN THAN IS AVAILABLE TO ALL DOCUMENTS HENCE CAN BE CALLED WITH USE REQUIRE()
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};



module.exports = mongoose.models.User || mongoose.model('User', userSchema);