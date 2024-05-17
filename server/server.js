const express = require('express');
const app = express();
const router = require("./router/auth-router");
// const {sequelize} = require("./utils/db");
app.use(express.json());
app.use("/api/auth", router);
const PORT = 3000;

// sequelize.authenticate().then(() => console.log('connection to db is successful.')).catch(e => console.log('Connection failed to the db', e));

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});
