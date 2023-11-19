const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//nueva instancia de express
const app = express();
const port = 8080;

app.get("/index.html", (req,res) => {
    res.sendFile(path.join(__dirname ,"index.html"));
});
app.get("/trabajadores.html", (req,res) => {
    res.sendFile(path.join(__dirname ,"trabajadores.html"));
});

app.get("/sedes.html", (req,res) => {
    res.sendFile(path.join(__dirname ,"sedes.html"));
});

app.get("/detalleTrabajador.html", (req,res) => {
    res.sendFile(path.join(__dirname ,"detalleTrabajador.html"));
});

app.get("/detalleSede.html", (req,res) => {
    res.sendFile(path.join(__dirname ,"detalleSede.html"));
});

app.listen(port,function(){
    console.log("Servidor desplegado correctamente");
});

