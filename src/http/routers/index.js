export const routes = async(app) =>{
    app.get('/',() => console.log('olá mundo'))
    app.get('/produtos/:id', (request, response) => {console.log (request.params)

        return response.status(200).send({message: 'Requisição recebida com sucesso!'})
    })
}