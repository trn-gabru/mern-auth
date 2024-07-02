import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));

// To handle the parameters that are coming from the url
app.use(express.urlencoded({ extended: true }));

// It is used to serve static files such as images, CSS files, JavaScript files, etc., from a specified directory.
app.use(express.static("public"));

//routes import
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
//routes declaration
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

export { app };
