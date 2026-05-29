import mongoose from "mongoose";

export class dbConnection {
    async pool() {
        try {
            const url = 'mongodb+srv://joao_vitor:Jo%40o2410@cluster0.nmudymi.mongodb.net/Biblioteca?appName=Cluster0';
        
            const mongo = await mongoose.connect(url);
            
            return mongo.connection;
        } catch (error) {
            return error;
        }
    }
}