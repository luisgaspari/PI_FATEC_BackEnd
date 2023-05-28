import express from 'express'
import VendasController from '../Controller/VendasController.js'

const VendasRouter = express.Router()

VendasRouter.get('/', VendasController.getVendas)
VendasRouter.post('/', VendasController.createVenda)
VendasRouter.get('/:id', VendasController.getVendaById)
VendasRouter.delete('/:id', VendasController.destroyVenda)
VendasRouter.put('/:id', VendasController.updateVenda)
VendasRouter.post('/:id/produtos', VendasController.createDetVenda)
VendasRouter.delete('/:id/produtos', VendasController.destroyDetVenda)

export default VendasRouter
