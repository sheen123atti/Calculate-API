const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/si', function(req, res){
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);

    const i = (p*r*t)/100;
    const a = p+i;
    res.send({
        'interest' : i,
        'amount' : a
    })
});

app.listen(3003);
