import {app} from "./app.js"
import cors from "@fastify/cors"
import { database } from "./database/index.js"
import 'dotenv/config'

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

     const query = await database('marcas').select();
    console.log('Query :', query)
    // database.raw('SELECT * FROM marcas WHERE id = 1;')
    //     .then(result => console.log(result[0]))
}

server();