const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./middleware/swagger.json");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const product = require("./routers/productRouter");
const user = require("./routers/userRouter");
const book = require("./routers/bookRouter");
const transaction = require("./routers/transactionRoute");
const employe = require("./routers/employeRouter");
const penalty = require("./routers/penaltyRouter");
app.use("/api/v1/book", book);
app.use("/api/v1/products", product);
app.use("/api/v1/user", user);
app.use("/api/v1/transaction", transaction);
app.use("/api/v1/employe", employe);
app.use("/api/v1/penalty", penalty);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
