import * as express from "express"
import * as http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))

io.on("connection", socket => {
  console.log("Connected")
})

server.listen(process.env.PORT, () => {
  console.log("Server has started")
})