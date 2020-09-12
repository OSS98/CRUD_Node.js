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

//     let y = req.query.id;
//     if(y!=""){
//       res.send(`this isn't query string: ${y}`)
//     }
    

// });

router.get("/edit", (req, res, next) => {
  let id = req.query.id;
  res.render("edit",{
      emp_id: id
  })
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



router.get("/update", (req, res, next) => {
    let id = req.query.id;
    let name = req.query.name;
    let age = req.query.age;
    let position = req.query.position;
    let pic = req.query.img;
    // let data = {
    //   id: id,
    //   name: name,
    //   age: age,
    //   position: position,
    //   pic: pic
    // }
    // res.send(data);
    let sql = `UPDATE employee set name = '${name}', age = ${age}, position = '${position}',p_profile = '${pic}' where id = ${id}`
    db.query(sql,(err)=>{
      if(err){
        console.log(err)
      }else{
        res.redirect('/')
      }
    })

  });


module.exports = router;
