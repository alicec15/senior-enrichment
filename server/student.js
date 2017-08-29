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
    Campus.findById(req.params.studentId)
        .then(student => res.json(student))
        .catch(next)
})

//POST new student
router.post('/', function (req, res, next){
    Student.findOrCreate({
        where: {
            name: req.body.name
        }
    })
    .spread(function (student, createdStudent) {
        Student.create(req.body)
            .then(function(stud){
                res.json({message: 'Created successfully', student: stud})
            })
    })
    .catch(next)
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