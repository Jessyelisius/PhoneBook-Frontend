const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
PORT = 5500;

const app = express()

/////////////////middleware/////////
app.use(morgan('dev'));
app.use(cors());
// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Set the views directory (if not the default "views")
app.set('views', path.join(__dirname, 'view'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login',(req, res) => {
    res.render('login');
})

app.get('/signup',(req, res) => {
    res.render('signup');
})
app.listen(PORT,()=>console.log("http://localhost:5500"));