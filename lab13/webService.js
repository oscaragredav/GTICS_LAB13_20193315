const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const e = require("express");
const path = require("path");

var cors = require('cors')
const app = express()
app.use(cors())

const conn = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bicicentro"
});

//1.a   /trabajadores
app.get("/trabajadores",(req,res) => {
    let sql = "select * from trabajadores";
    conn.query(sql,(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//1.b /trabajadores/{dni}
app.get("/trabajadores/:dni",(req,res) => {
    let dni = req.params["dni"];
    let sql = "select * from trabajadores where dni=?;";
    conn.query(sql,[dni],(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//1.c   /trabajadores/ventas/{dni}
app.get("/trabajadores/ventas/:dni",(req,res) => {
    let dni = req.params["dni"];
    let sql = "select v.fecha, i.nombre, i.numeroserie, m.nombre as marca from ventas v join inventario i on v.id_inventario = i.idinventario join marcas m on i.idmarca = m.idmarca where v.dniTrabajador = ?;";

    conn.query(sql,[dni],(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//1.d /sedes
app.get("/sedes",(req,res) => {
    let sql = "select * from sedes";
    conn.query(sql,(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//1.e   /sedes/{idSede}
app.get("/sedes/:id",(req,res) => {
    let id = req.params["id"];
    let sql = "select * from sedes where idsede=?;";
    conn.query(sql,[id],(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

//1.f   /sedes/trabajadores/{idSede}
app.get("/sedes/trabajadores/:idSede",(req,res) => {
    let idSede = req.params["idSede"];
    let sql = "select t.* from trabajadores t join sedes s on t.idsede = s.idsede where s.idsede = ?;";
    conn.query(sql,[idSede],(err, result) => {
        if(err) throw err;
        res.json(result);
    });
});



app.listen(3000,function(){
    console.log("Servidor desplegado correctamente");
});
