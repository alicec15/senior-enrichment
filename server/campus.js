const router = require('express').Router();
const {Campus, Student} = require('../db/models');

module.exports = router;

// GET api/campus
router.get('/', function (req, res, next) {
    Campus.findAll()
        .then(campus => res.json(campus))
        .catch(next);
});

//get all campus by id
router.get('/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
        .then(campus => res.json(campus))
        .catch(next)
})

//get students by campus id
router.get('/student/:campusId', function(req, res, next) {
    Student.findAll({
        where: {
            campusId: req.params.campusId
        }
    })
        .then(students => res.json(students))
        .catch(next)
})

//post new campus
router.post('/', function (req, res, next){
    Campus.findOrCreate({
        where: {
            name: req.body.name
        }
    })
    .spread(function (campus, createdCampus) {
        // Campus.create(req.body.image)
        //     .then(function(camp){
        //         res.json({message: 'Created successfully', campus: camp})
        //     })
        res.json({message: 'created successfully', campus: campus})
    })
    .catch(next)
})

//update campus
router.put('/:campusId', function(req, res, next){
    Campus.findById(req.params.campusId) 
    .then(function(campus){
        campus.update(req.body)
            .then(function(camp){
                res.json(camp)
            })
        })
    .catch(function(err){
        res.status(500)
    })
})

// delete a campus
router.delete('/:campusId', function(req, res, next){
    Campus.findById(req.params.campusId)
    .then(function(campus){
        return campus.destroy();
    })
    .catch(next)
})

