import express from 'express'
import FornecedorController from '../Controller/FornecedorController.js'

const FornecedorRouter = express.Router()

FornecedorRouter.get('/', FornecedorController.getFornecedores)
FornecedorRouter.post('/', FornecedorController.createFornecedor)
FornecedorRouter.get('/:id', FornecedorController.getFornecedorById)
FornecedorRouter.delete('/:id', FornecedorController.destroyFornecedor)
FornecedorRouter.put('/:id', FornecedorController.updateFornecedor)

export default FornecedorRouter
