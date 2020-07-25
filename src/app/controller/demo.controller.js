let { list ,dataMapToNumber } = require("../data/heroList")


exports.getNames = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }else{
        let code = req.body.code.substr(2,req.body.code.length) //fetching the code
        let reqArray = list.filter(item=>item.length===code.length)  //filtering the data
        console.log(reqArray)

        if(reqArray.length!=0){
             for(let i=0;i<code.length;i++){
                let ch = code.charAt(i)
                dataMapToNumber.forEach(item=>{
                    Object.keys(item).filter(key=>{
                        if(key==ch){
                                let value = item[key];  //this value will be each alphabet which will be compared with reqArray

                            }
                    })
                })
             }

        }else{
           return res.status(200).send({
                message: "Data Not Found !"
            });
            
        }
    }

      
};









