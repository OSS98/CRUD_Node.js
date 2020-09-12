var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let query = "select * from employee";
  db.query(query, (err, result) => {
    if (err) {
      res.redirect("/");
    }
    res.render("index", {
      title: "Welcome to Homepage",
      emp: result,
    });
  });
});

router.get("/add", (req, res, next) => {
  res.render("add");
});

router.get("/delete", (req, res, next) => {
    let id = req.query.id;
    
    // if(id!=""){
    //   res.send(`this is query string: ${id}`)
    // }
    let sql = `delete from employee where id = ${id}` 

    db.query(sql, (err, result)=>{
        if(err){
          res.send(err)
        }else{
          res.redirect('/')
        }
    })

    

});

// router.get("/delete/:id", (req, res, next) => {

//     let y = req.params.id;
//     if(y!=""){
//       res.send(`this isn't query string: ${y}`)
//     }
    

// });

router.get("/update", (req, res, next) => {
  res.render("edit");
});

router.post("/add", (req, res, next) => {
  let name = req.body.name;
  let age = req.body.age;
  let position = req.body.position;
  let img = req.body.img;

  const sql = `insert into employee(name,age,position,p_profile) value('${name}',${age},'${position}','${img}')`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.render("add");
  });
});



router.post("/update", (req, res, next) => {
  res.send(req.body);
});


module.exports = router;
