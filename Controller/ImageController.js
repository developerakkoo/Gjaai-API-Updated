const Image = require("./../Models/ImageModal");


exports.postImage = async(req, res, next) =>{
    try {
        const image = await Image.create(req.body);
        if(image){
            res.status(200).json({
                status: true,
                message: "Image For Institute Created",
                image
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

exports.getImageByInstitute = async(req, res, next) =>{
    try {
        const image = await Image.find({institute: req.params.id});

 if(image){
            res.status(200).json({
                status: true,
                message: "Image Found for Institute",
                image
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

exports.getImageById = async(req, res, next) =>{
    try {
        const image = await Image.findOne({_id: req.params.id});

        if(image){
                   res.status(200).json({
                       status: true,
                       message: "Image Found By Id",
                       image
                   })
               }

        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

exports.deleteImageByInstitute = async(req, res, next) =>{
    try {
        const image = await Image.deleteMany({institute: req.params.id});

        if(image){
                   res.status(200).json({
                       status: true,
                       message: "Image Found for Institute",
                       image
                   })
               }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}