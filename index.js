const express =require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const course = require('./data/course.json')

app.get('/', (req, res)=>{
    res.send(`<h1>Pro Skill Server is Running</h1>`)
});
app.get('/course', (req, res)=>{
    res.send(course)
});
app.get('/course/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const courses = course.find(c => c.id === id);
    res.send(courses)
    
})

app.listen(port)