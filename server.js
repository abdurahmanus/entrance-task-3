const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const pagesRoutes = require("./pages/routes");
const graphqlRoutes = require("./graphql/routes");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(bodyParser.json());

app.use("/", pagesRoutes);
app.use("/graphql", graphqlRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log(`Express app listening on localhost:${app.get("port")}`)
});
