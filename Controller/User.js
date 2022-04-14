const User = require('../Models/UserModal');
const io = require('../socket');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.loginUser = async(req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;


    User.findOne({ email: email})
    .then(user => {
        if(!user){
           res.status(400).json({message: 'User not found', status:'error'})
        }

        loadedUser = user;

        bcrypt.compare(password, user.password)
        .then(doMatch => {
            if(!doMatch){
                res.status(400).json({message: 'Password do not match', status:'error'})

            }

            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id.toString(),
            },"!23ThisisaSecretFor@#$%^%^^&&allthebest", {expiresIn: '3h'})

            res.status(200).json({
                message: 'Sign In Successfull',
                token: token,
                userId: loadedUser._id.toString(),
                expiresIn: '3h'
            })
        });
    }).catch(err =>{
        res.status(500).json({err, message: 'Something went wrong!'})

    })
}



exports.postUser = async (req, res, next) => {
    try {
        const host = req.hostname;

    // if (!req.file) {
    //   res.status(404).json({
    //     status: false,
    //     message: 'Please provide a image'
    //   })
    // }

    const studentId = req.body.studentId;
    const email = req.body.email;
    const password = req.body.password;

    const GrNo = req.body.GrNo;
    const division = req.body.division;
    const studentName = req.body.studentName;
    const motherName = req.body.motherName;
    const DOB = req.body.DOB;
    const AdharNo = req.body.AdharNo;
    const mobileNo = req.body.mobileNo;
    const address = req.body.address;
    const status = req.body.status;
    const finalForPrint = req.body.finalForPrint;


    // const photo = req.file.path.replace(/\\/g, "/");
    // console.log(imageUrl);

    User.findOne({ email: email})
    .then((user) => {
        if(user){
            res.status(400).json({
                status: false,
                message: 'User with userId already exists. Please login.'
            })
        }

        bcrypt.hash(password, 12)
        .then((hashedPasswords) => {
            const user = new User({
                email: email,
                password: hashedPasswords,
                studentId: studentId,
                GrNo:GrNo,
                division: division,
                studentName:studentName,
                motherName: motherName,
                DOB: DOB,
                AdharNo:AdharNo,
                mobileNo:mobileNo,
                address:address,
                finalForPrint:finalForPrint,
                status:status,
                // photo: photo

            })
    
            return user.save();
        }).then((result) => {
            res.status(201).json({message: 'User Created Successfully!', status: '201', userId: result._id});
        })


    })
        
    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}


exports.getUser = async (req, res, next) => {
    try {
        let userId = req.params.id;

        const user = await User.findById(userId);

        if(user) {
            res.status(200).json({ user: user, message: 'User Found was successfully'})
        } 
    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}

exports.getAllUser = async (req, res, next) => {
    try {
        
        const user = await User.find({});

        if(user){
            res.status(201).json({ user, message: "All Users Found"})
        }


    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}

exports.putUser = async (req, res, next) => {
    try {
        let userId = req.params.userId;

        const user = await User.findByIdAndUpdate(userId, req.body);

        if(user) {
            res.status(201).json({ user: user , message: 'User updated successfully'})
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        let userId = req.params.userId;
        
        const user = await User.findByIdAndDelete(userId);

        if(user) {
            res.status(200).json({ user, message: 'User deleted successfully'})
        }

    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}