const router = require('express').Router();
const {Campus, Student} = require('../db/models');

module.exports = router;


// GET api/student
router.get('/', function (req, res, next) {
    Student.findAll()
        .then(student => res.json(student))
        .catch(next);
});

//GET student by ID
router.get('/:studentId', function (req, res, next) {
    Student.findById(req.params.studentId)
        .then(student => res.json(student))
        .catch(next)
})

//GET campus by student
router.get('/campus/:studentId', function(req, res, next){
    Student.findById(req.params.studentId)
        .then(student => {
            Campus.findById(student.campusId)
                .then(campus => res.json(campus))
        })
        .catch(next)
})

//POST new student
router.post('/', function (req, res, next){
    Student.create(req.body)
    .then(student => {
        // console.log(student, 'student')
        res.json(student)
        })
    })


//PUT new student
router.put('/:studentId', function(req, res, next){
    Student.findById(req.params.studentId) 
    .then(function(student){
        student.update(req.body)
            .then(function(stud){
                res.json({message: 'Updated successfully', student:stud})
            })
        })
    .catch(function(err){
        res.status(500)
    })
})

//DELETE student
router.delete('/:studentId', function(req, res, next){
    Student.findById(req.params.studentId)
    .then(function(student){
        return student.destroy();
    })
    .catch(next)
})