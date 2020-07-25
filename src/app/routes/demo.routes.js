module.exports = app =>{
    const controller = require ("../controller/demo.controller.js")
    
    // Post request
  app.post("/getHeroName", controller.getNames);

  
}