const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const connectionRoutes = require('./routes/connectionRoutes');

// create App
const app = express();

//Configure App
let port = 3000;
let host='localhost';
app.set('view engine','ejs');

//Mount Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));


//Setup Routes
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contactus',(req,res)=>{
    res.render('contactus');
})

app.use('/connections',connectionRoutes);
app.use((req,res,next)=>{
    console.log('404');
    let err = new Error('The server cannot locate '+req.url);
    err.status=404;
    next(err);
});


app.use((err,req,res,next)=>{
    if(!err.status){
        err.status=500;
        err.message = ("Internal Server Error");
    }

    res.status(err.status)
    res.render('error', {error: err});
});

//Start the server
app.listen(port,host, ()=>{
    console.log('Server is running on port',port);

})



