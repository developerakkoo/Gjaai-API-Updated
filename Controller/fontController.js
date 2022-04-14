const Font = require("../Models/fontModal");



exports.postFont = async(req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).json({ error, message: error.message})
    }
}

exports.getFontByInstitute = async(req, res, next) => {
    try {
        let instituteId = req.params.id;

        const font = await Font.find({institute: instituteId});

        if(font){
            res.status(200).json({ 
                status: true,
                message: "Fonts Found By Institute",
                font
            })
        }


    } catch (error) {
        res.status(400).json({ error, message: error.message})
    }
}