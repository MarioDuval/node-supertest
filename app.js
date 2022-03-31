import express from 'express';
import userRouter from './routers/usersRouter.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('-----> app.js');
    next()
});

app.use("/user",userRouter);

// app.post("/user/register", (req, res) => {
//     res.send({username: "pep@dominio.es"});
// })

// app.get("/user/register", (req, res) => {
//     res.sendStatus(200);
// })



export default app;