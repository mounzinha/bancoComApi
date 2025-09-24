// function inicial() {
//     console.log("Opá!");    

// }
// inicial();

import fastify from "fastify";
import { routes } from "./http/routers/index.js";

const app = fastify();
app.register(routes)

export { app };