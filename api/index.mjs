// import express from 'express'

// const app = express()

// app.get('/test', (req, res) => {
//     res.json('test ok')
// })

// app.listen(4000)


import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.listen(4000);


// const express = require('express');
// const app = express();

// app.get('/test', (req, res) => {
//     console.log('Request received at /test');
//     res.json({ message: 'test ok' });
// });

// app.listen(4000)