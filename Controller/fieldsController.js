const Field = require("./../Models/fieldsModel");


exports.postField = async (req, res, next) =>{
    try {
        const field = await Field.create(req.body);
        if(field){
            res.status(200).json({
                field,
                message: "Field Created"
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

exports.getFieldByInstitute = async (req, res, next) =>{
    try {
        const field = await Field.findOne({
            institute: req.params.id
        })

        if(field){
            res.status(200).json({
                field
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}