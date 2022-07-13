const Input = require('../Models/inputsModal');
const Institute = require('../Models/instituteModal');



exports.postInstitute = async (req, res, next) => {
    try {
        console.log(req.body);
        let instituteID = req.params.id;
        const input = await Input.create(req.body); 

        if(input){
            res.status(200).json({
                message: "Input Created Successfully",
                doc,
                input
            })
           
        }

       
        
    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}



exports.getInstitute = async(req, res, next) => {
    try {
        const i = await Input.find({});

        if(i){
            res.status(200).json({
                status: true,
                input: i,
                message: "input found"
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});       
    }
}

exports.getInputByInstituteId = async(req, res, next) => {
    try {
        const i = await Input.find({ institute: req.params.id });

        if(i){
            res.status(200).json({
                status: true,
                input: i,
                message: "input found"
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});       
    }
}



exports.getInstituteById = async(req, res, next) => {
    try {

        const id = req.params.id;

        const input = await Input.findOne({_id: id}).populate("inputs");

        if(input){
            res.status(200).json({
                status: true,
                message: "input found",
                input
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}



exports.updateInstitute = async(req, res, next) => {
    try {
        const id = req.params.id;

        const input = await Input.findByIdAndUpdate(id, {
            data: req.body
        });

        if(input){
            res.status(201).json({
                status: true,
                message: "input Updated",
                input
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}


exports.deleteInput = async(req, res, next) => {
    try {
        const id = req.params.id;
        let input = await Input.deleteMany({institute: id})
        if(input){
            res.status(200).json({ 
                input,
                message: "Deleted all Inputs"
            })
            
        }
        
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}




