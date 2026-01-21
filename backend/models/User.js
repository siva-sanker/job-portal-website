const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
  name:{ type:String, required:true},
  email:{ type:String, required:true,unique:true},
  password:{ type:String, required:true},
  role:{ type:String,enum:["jobseeker","employer"], required:true},
  avatar:String,
  resume:String,
  companyName:String,
  companyLogo:String,
  companyDescription:String
}, {timestamps:true} );

userSchema.pre("save", async function () {
  console.log("✅ CORRECT PRE-SAVE LOADED");
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword=function(enteredPassword){
  return bcrypt.compare(enteredPassword,this.password);
};

module.exports=mongoose.model("User",userSchema);