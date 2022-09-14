const fs = require("fs");
var zipdir = require('zip-dir');
/* exports.getListFiles = async (req, res, next) => {
    const directoryPath = __dirname + "/image/2022-07-12/Printing";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
}; */

exports.download = async (req, res, next) => {

    // code to download zip file

    var buffer = await zipdir('C:/Work/TechLapse/Gjaai-API-Updated/image');//change file location for live server

    res.set('Content-Type', 'application/octet-stream');
    res.set('Content-Disposition', `attachment; filename=image.zip`);
    //res.set('Content-Length', folder.length);
    res.send(buffer);
};
