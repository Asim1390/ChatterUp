import mongoose from 'mongoose';

const baseUrl = "mongodb+srv://asimswar:asimswar@cluster0.yikjw1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(baseUrl  , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
