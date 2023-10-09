import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const homeList = [];
const workList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        doList: homeList,
    });
});

app.post("/", (req, res) => {
    homeList.push(req.body["list-item-text"]);
    res.render("index.ejs", {
        doList: homeList,
    });
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        doList: workList,
    });
});

app.post("/work", (req, res) => {
    workList.push(req.body["list-item-text"]);
    res.render("work.ejs", {
        doList: workList,
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});