const Sign = require('./../Models/signModal');


exports.createSign = async(req, res, next) =>{
    try {
        const sign = await Sign.create(req.body);
        if(sign){
            res.status(200).json({
                status: true,
                message: "Sign For Institute Created",
                sign
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}

exports.getSignByInstitute = async(req, res, next) =>{
    try {
        const sign = await Sign.findOne({
            institute: req.params.id
        })

        if(sign){
            res.status(200).json({
                status: true,
                message: "Sign For Institute Found",
                sign
            })
        }
        
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}

exports.deleteSignByInstitute = async(req, res, next) =>{
    try {
        const sign = await Sign.findOneAndDelete({
            institute: req.params.id
        })
        
        if(sign){
            res.status(200).json({
                status: true,
                message: "Sign Deleted",
                sign
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}


