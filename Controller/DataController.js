const Data = require("../Models/dataUserModel");



exports.postData = async(req, res, next) => {
    try {
        const data = await Data.create(req.body);

        if(data){
            res.status(200).json({ 
                data,
                message: "DAta Created",
                id: data._id
            })
        }
        
    } catch (error) {
        res.status(400).json({ error, message: error.message})
    }
}

exports.getDataById = async(req, res, next) => {
    try {
       

        const data = await Data.find({studentID:req.params.id, index: req.params.index});

        if(data){
            res.status(200).json({ 
                status: true,
                message: "Data Found By Id",
                data
            })
        }


    } catch (error) {
        res.status(400).json({ error, message: error.message})
    }
}

exports.updateData = async(req, res, next) => {
    try {
       

        const data = await Data.findByIdAndUpdate(req.params.id, req.body);

        if(data){
            res.status(200).json({ 
                status: true,
                message: "Data Updated",
                data
            })
        }


    } catch (error) {
        res.status(400).json({ error, message: error.message})
    }
}