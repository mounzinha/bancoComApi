// function inicial() {
//     console.log("Opá!");    

// }
// inicial();

import fastify from "fastify";
import cors from "@fastify/cors";
import 'dotenv/config'

const app = fastify()

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
        console.log("Servidor rodando na porta 3333 " + process.env.PORT)

    })
}

server()