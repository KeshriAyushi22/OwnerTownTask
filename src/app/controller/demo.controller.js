
exports.getNames = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }else{
        console.log(req.body)
        let code = req.body.code.substr(2,req.body.code.length)
        console.log(code)
    }

    //decode the code and then return the name.
      
};









