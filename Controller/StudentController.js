const Student = require('../Models/StudentModal');

const socket = require('../socket');

exports.createStudent = async(req, res, next) => {
    try{

        const student = await Student.create(req.body);

        if(student){
            res.status(200).json({ student, status: true})
        }

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
       
        console.log(`userId:- ${req.params.udise} password:- ${req.params.password} isId: ${req.params.isIdUploaded}`);

        const s = await Student.find({userId : parseInt(req.params.udise), password: parseInt(req.params.password),isIdUploaded: req.params.isIdUploaded});

        if(s){
            res.status(200).json({
                status: true,
                s,
                message: "Found Students Under Teacher"
            })
        }else{
        res.status(404).json({message: error.message, status: false});

        }
    } catch (error) {
        res.status(404).json({message: error.message, status: false});
    }   
}


exports.getStudentById = async(req, res, next) => {
    try {
        const s = await Student.findOne({_id : req.params.id}, "-__v -isIdUploaded -updatedAt -createdAt");

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

exports.getStudentByInstituteId = async(req, res, next) => {
    try {
        const s = await Student.find({InstituteId : req.params.id}, "-createdAt -updatedAt -__v -_id -InstituteId");

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
        //   console.log(req.file);
         

        //   console.log(pos);

          let photo = req.protocol + '://'+ "192.168.3.108" + ":" + "8081" + "/" +  req.file.path

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