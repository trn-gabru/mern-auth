import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `\nMobgoDB connected Successfully !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Failed To Connect with Mongodb", error);
    process.exit(1);
  }
};

export default connectDB;
