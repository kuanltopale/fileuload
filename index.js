import  express from "express";
import mysql from "mysql";
 const app = express()

 const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notebook1",
  });

  app.get("/", (req, res) => {
    res.json("hello");
  });
  
  app.use(express.json());
  app.use(express.urlencoded());

  app.get("/books", (req, res) => {
    const q = "SELECT * FROM book";
    db.query(q, (err, data) => {
      if (!err) {
        //console.log(err);
        return res.json(data);
      }
      return res.json(err);
    });
  });

  // app.post("/books",(req,res)=>{
  //   const q= "INSERT INTO books('title','des','price','cover') VALUES(?)"
  //   const VALUES =[
  //     req.body.title,
  //   req.body.des,
  //   req.body.price,
  //   req.body.cover,
  //    ];
  //    db.query(q,[VALUES],(err,data)=>{
  //     if(!err){
  //       return res.json(data);

  //     }
  //     console.log(err);
  //     return res.json(err);
  //    });

  // });
  app.post("/books", (req, res) => {
    const q = "INSERT INTO book(`title`, `des`, `price`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.des,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }); 

  app.delete("/book/:id",(req,res)=>{
    const bookId =req.params.id;
    const q ="DELETE FROM  book WHERE id = ?"

    db.query(q,[bookId],(err,data)=>{
      if (err) return res.json(err);
      return res.json({data});
    });
  });

  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE book SET `title`= ?, `des`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.des,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
 app.listen(8800,()=>{
    console. log ("connected to backend2")
 })

 

  