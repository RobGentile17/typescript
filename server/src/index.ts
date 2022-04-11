import express, { Request, Response } from "express"
import { router } from "./routes/loginRoutes"
import bodyParser from "body-parser"
import cookieSession from "cookie-session"

const app = express()
// order matters for these app.use() methods
app.use(bodyParser.urlencoded({ extended: true })) //this is a middleware
app.use(cookieSession({ keys: ["justAstring"] })) //must be above the .use(router) or it won't work properly
app.use(router)

app.listen(3000, () => {
  console.log("Listening on Port 3000")
})
