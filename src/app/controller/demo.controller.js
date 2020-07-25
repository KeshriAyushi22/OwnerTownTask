const hero = require("../data/heroList")


exports.getNames = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).json({
            message: "Content can not be empty!"
        });
    }else{
        let code = req.body.code.substr(2,req.body.code.length) //fetching the code
        let reqArray = hero.list.filter(item=>item.length===code.length)  //filtering the data
        console.log(reqArray)
        let output="";

        if(reqArray.length!=0){
            for(let i=0;i<code.length;i++){
               let ch = code.charAt(i) //each number of code
               hero.dataMapToNumber.forEach(item=>{     
                   Object.keys(item).filter(key=>{   //key each number with its array of value
                       if(key==ch){
                                value = item[key];  //this value will be each alphabet which will be compared with reqArray
                           }
                   })
               })

               //now for that particular ch - value is obtained we can filter the reqArray with that.
               reqArray.forEach((eachData,index)=>{
                   value.forEach((eachAlphabet)=>{
                       
                       if(eachData[i]===eachAlphabet){
                           
                            output=output+eachAlphabet  
                            console.log(output) 
                        }
                   })
               })
            }
            if(output.length){
                return res.status(200).json({
                    message: output
                });
            }else{
                return res.status(200).json({
                    message: "NO MATCH FOUND"
                });
            }
       }else{
           return res.status(200).json({
                message: "Data Not Found !"
            });
            
        }
    }

      
};









