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

exports.getStudentByTeacher = async(req, res, next) => {
    try {
       


        const s = await Student.find({LoginID : req.params.udise, Password: req.params.password});

        if(s){
            res.status(200).json({
                status: true,
                s,
                message: "Found Students Under Teacher"
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

exports.updateStudentPhoto = async(req, res, next) => {
    try {
        if (!req.file) {
            res.status(404).json({
              status: false,
              message: 'Please provide a Image'
            })
          }
          console.log(req.file);

          let photo = req.protocol + '://'+ req.hostname + ":" + "8081" + "/" +  req.file.path

        const s = await Student.findOneAndUpdate({_id : req.params.id}, {
            StudentPhoto: photo
        });

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