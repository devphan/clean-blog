const express = require('express');
const path = require('path');
const app = new express();


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const BlogPost = require('./app/models/BlogPost')


//cấu hình database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database,', {useNewUrlParser: true});

//cấu hình thư mục file html, css, img
app.use(express.static('public'))

//set template engine
const ejs = require('ejs');
app.set('view engine', 'ejs');

//Home
app.get('/', (req, res) => {
    BlogPost.find({}, (error, data) => {
        console.log("Kieu du lieu la --------- " + typeof data);
        res.render('index', {
            blogposts: data
        })
    })
    
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/post', (req, res) => {
    res.render('post')
});

app.get('/create', (req, res) => {
    res.render('create')
})

//POST
app.post('/posts/store', (req, res) => {
    // console.log(req.body);
    BlogPost.create(req.body, (error, data) => {
        console.log(error);
        res.redirect('/')
    })
   
})

app.listen(3000, () => {
    console.log("Hello Clean Blog");
})