const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: 'http://127.0.0.1:3000'
};

app.set('port', process.env.PORT || 3000);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const testDataRouter = require('./routers/TestDataRouter.js');

app.use('/api', testDataRouter);

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
});