import express from 'express'
import ProdutoController from '../Controller/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/', ProdutoController.getProdutos)
ProdutoRouter.post('/', ProdutoController.createProduto)
ProdutoRouter.get('/:id', ProdutoController.getProdutoById)
ProdutoRouter.delete('/:id', ProdutoController.destroyProduto)
ProdutoRouter.put('/:id', ProdutoController.updateProduto)

export default ProdutoRouter
