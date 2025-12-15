require('dotenv').config();
const express=require('express');
const cors=require('cors');
const path=require('path');
const connectDB=require('./config/db');

const authRoutes=require('./routes/authRoutes');

const app=express();

app.use(
    cors({
        origin:'*',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type','Authorization'],
    })
);

connectDB();

// middleware 
app.use(express.json());

// routes 
// app.use('/api/auth',authRoutes);

app.use('/uploads',express.static(path.join(__dirname,'uploads'),{}));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log('server running at port',PORT));