const Institute = require('../Models/instituteModal');


exports.generateOTP = async(req, res, next) => {
    try{
        //Send a OTP to user


        //Match the OTP 

    }catch(err){

    }
}



exports.postInstitute = async (req, res, next) => {
    console.log("Post Institute");
    // console.log(host);
    try {
        const host = req.hostname;

    // if (!req.file) {
    //   res.status(404).json({
    //     status: false,
    //     message: 'Please provide a image'
    //   })
    // }

    const Name = req.body.Name;
    const email = req.body.email;
    const UDiseNo = req.body.UDiseNo;

    const ContactPerson = req.body.ContactPerson;
    const ContactNo = req.body.ContactNo;
    const CardNo = req.body.CardNo;
    const LessColor = req.body.LessColor;
    const LessPrinting = req.body.LessPrinting;
    const LessMatter = req.body.LessMatter;
    const MobileNo = req.body.MobileNo;
    const Address = req.body.Address;
    const Language = req.body.Language;
    const Side = req.body.Side;
    const CardQuantity = req.body.CardQuantity;
    const FinalRate = req.body.FinalRate;
    const PaymentMode = req.body.PaymentMode;


    //const photo = req.file.path.replace(/\\/g, "/");

    let pics = [];
    const photo = req.files.map((file) =>{
            return req.protocol+ '://'+ req.hostname + ":" + "8081" + "/" +  file.path
        
    });
    // console.log(photo);
    

    console.log(pics);

      
            const institute = await new Institute({
                Name:Name,
                email: email,
                Address:Address,
                UDiseNo:UDiseNo,
                ContactPerson:ContactPerson,
                ContactNo: ContactNo,
                MobileNo: MobileNo,
                CardNo:CardNo,
                LessColor: LessColor,
                LessPrinting:LessPrinting,
                LessMatter: LessMatter,
                Language: Language,
                Side:Side,
                CardQuantity:CardQuantity,
                FinalRate:FinalRate,
                PaymentMode:PaymentMode,
                templatePhoto:  photo
            })

            institute.save().then((result) =>{
                res.status(200).json({message: "Institute Registered Successfully", result, id: result._id});
            }).catch ((error) => {
                res.status(404).json({ error: error, message: 'Something went wrong!'})
            })


    
        
    } catch (error) {
        res.status(404).json({ error: error, message: 'Something went wrong!'})
    }
}



exports.getInstitute = async(req, res, next) => {
    try {
        const i = await Institute.find({});

        if(i){
            res.status(200).json({
                status: true,
                institutes: i,
                message: "Institutes found"
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});       
    }
}


exports.getInstituteByUdiseAndMobile = async(req, res, next) => {
    console.log("UDISE AND MOBILE");
    try {
    

        const institute = await Institute.find({ UDiseNo:req.params.udise, ContactNo:req.params.mobile }).populate("inputs");

        if(institute){
            res.status(200).json({
                status: true,
                message: "Found by udise and mobile no",
                ins: institute,
            })
        }
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});       
        
    }
}


exports.getInstituteById = async(req, res, next) => {
    try {

        const id = req.params.id;

        const institute = await Institute.findOne({_id: id}).populate("inputs");

        if(institute){
            res.status(200).json({
                status: true,
                message: "Institute found",
                institute
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}



exports.updateInstitute = async(req, res, next) => {
    try {
        const id = req.params.id;

        const institute = await Institute.findByIdAndUpdate(id, req.body);

        if(institute){
            res.status(201).json({
                status: true,
                message: "Institute Updated",
                institute
            })
        }
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}


exports.deleteInstitute = async(req, res, next) => {
    try {
        const id = req.params.id;
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}


exports.findInstitute = async(req, res, next) => {
    try {
        
    } catch (error) {
        res.status(404).json({ error: error, message: error.message});        
    }
}


