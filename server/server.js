require('dotenv').config();
const express = require('express');
const massive = require('massive');
const mc = require('../server/mainController');
// const {CONNECTION_STRING, SERVER_PORT} = process.env;

const app = express();
app.use(express.json());


app.get('/api/houses', mc.getAll)
app.post('/api/house', mc.createPost)


const PORT=4000;
// const connectionString = 'postgres://fgdrljxxsevbko:0544cd67a8dd8936f939d47611ce8ed150b763162eb012a00e157b18d1a8489f@ec2-23-23-235-86.compute-1.amazonaws.com:5432/d1suqlum29ko1q?ssl=true';
massive('postgres://fgdrljxxsevbko:0544cd67a8dd8936f939d47611ce8ed150b763162eb012a00e157b18d1a8489f@ec2-23-23-235-86.compute-1.amazonaws.com:5432/d1suqlum29ko1q?ssl=true')
    .then(connection =>{
        app.set('db', connection)
        app.listen(PORT, ()=>{console.log(`Let's go get ${PORT} burgers after Sim2!`)})
    }).catch(err=>console.log(err))
