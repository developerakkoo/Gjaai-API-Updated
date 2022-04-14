const Vendor = require("./../Models/Vendor");

exports.createVendor = async(req,res,next) =>{
    try{
        const v = await Vendor.create(req.body);
        if(v){
            res.status(200).json({
                status: true,
                message: "Vendor Successfully Created!",
                v
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


exports.getAllVendor = async(req,res,next) =>{
    try{
        const v = await Vendor.create(req.body);
        if(v){
            res.status(200).json({
                status: true,
                message: "Vendor Successfully Created!",
                v
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}



exports.getVendorById = async(req,res,next) =>{
    try{
        const v = await Vendor.create(req.body);
        if(v){
            res.status(200).json({
                status: true,
                message: "Vendor Successfully Created!",
                v
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


exports.updateVendor = async(req,res,next) =>{
    try{
        const v = await Vendor.create(req.body);
        if(v){
            res.status(200).json({
                status: true,
                message: "Vendor Successfully Created!",
                v
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


exports.deleteVendor = async(req,res,next) =>{
    try{
        const v = await Vendor.create(req.body);
        if(v){
            res.status(200).json({
                status: true,
                message: "Vendor Successfully Created!",
                v
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

