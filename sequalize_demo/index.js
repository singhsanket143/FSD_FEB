const express = require('express');
const city = require('./models/city');
const app = express();
const Student = require('./models/index').Student;
const Course = require('./models/index').Course;
const City = require('./models/index').City;
const db = require('./models/index');

console.log(Student);

app.listen(3000, async () => {
    console.log("server started");
    // await db.sequelize.sync({force: true});
    const student = await Student.findOne({
        where: {
            id: 2
        }
    });
    const city = await City.findOne({
        where: {
            id: 2
        }
    });

    city.addStudent(student);
});