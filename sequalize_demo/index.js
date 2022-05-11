const express = require('express');
const app = express();
const Student = require('./models/index').Student;
const Course = require('./models/index').Course;

console.log(Student);

app.get('/students', async (req, res) => {
    const all_student = await Student.findAll();
    return res.json({
        message: "ok",
        data: all_student
    });
})


app.listen(3000, async () => {
    console.log("server started");

    // const new_student = await Student.create({name: "Suchitra", age: 23});
    // console.log(new_student);
    // const all_student = await Student.findAll();
    // console.log(all_student);
    //const course = await Course.create({name: "Js"});
});