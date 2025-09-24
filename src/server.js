import {app} from "./app.js"
import cors from "@fastify/cors"

async function server() {
    app.register(cors,{
        origin: true,
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type","Authorization"]
    })

    app.listen({
        host: '0.0.0.0',
        port: process.env.PORT
    }).then(() => {
        console.log("Servidor rodando na porta " + process.env.PORT)

    })
}

server();