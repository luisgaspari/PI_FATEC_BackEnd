import express from 'express'
import ClienteController from '../Controller/ClienteController.js'

const ClienteRouter = express.Router()

ClienteRouter.get('/', ClienteController.getClientes)
ClienteRouter.post('/', ClienteController.createCliente)
ClienteRouter.get('/:id', ClienteController.getClienteById)
ClienteRouter.delete('/:id', ClienteController.destroyCliente)
ClienteRouter.put('/:id', ClienteController.updateCliente)

export default ClienteRouter
