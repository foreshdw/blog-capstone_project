import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.get("/edit", (req, res) => {
    const data = {
        title: req.query.title,
        paragraph: req.query.paragraph
    }

    res.render("edit.ejs", data);
});

app.post("/view", (req, res) => {
    const data = {
        title: req.body.title,
        paragraph: req.body.paragraph
    }
    
    if(req.body.paragraph && req.body.title) {
        res.render("view.ejs", data);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});