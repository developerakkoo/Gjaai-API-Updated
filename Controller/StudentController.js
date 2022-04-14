const Student = require('../Models/StudentModal');

const socket = require('../socket');

exports.createStudent = async(req, res, next) => {
    try{

        const student = await Student.create(req.body);

        if(student){
            res.status(200).json({ student, status: true})
        }
        socket.getIO().emit("student", {student: student})

    }catch(err){
        res.status(404).json({message: error.message, status: false});

    }
}

exports.getAllStudent = async(req, res, next) => {
    try {
        const s = await Student.find({});

        if(s){
            res.status(200).json({
                status: true,
                s
            })
        }
    } catch (error) {
        res.status(404).json({message: error.message, status: false});
    }
}

exports.getStudentById = async(req, res, next) => {
    try {
        const s = await Student.findOne({_id : req.params.id});

        if(s){
            res.status(200).json({
                status: true,
                s
            })
        }
    } catch (error) {
        res.status(404).json({message: error.message, status: false});
    }   
}

exports.updateStudent = async(req, res, next) => {
    try {
        const s = await Student.findOneAndUpdate({_id : req.params.id}, req.body);

        if(s){
            res.status(200).json({
                status: true,
                s
            })
        }
    } catch (error) {
        res.status(404).json({message: error.message, status: false});
    }   
}


exports.deleteStudent = async(req, res, next) => {
    try {
        const s = await Student.findByIdAndDelete(req.params.id);

        if(s){
            res.status(200).json({
                status: true,
                s
            })
        }
    } catch (error) {
        res.status(404).json({message: error.message, status: false});
    }   
}