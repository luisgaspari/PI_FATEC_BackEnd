import {
    Compra,
    DetCompra,
    Fornecedor,
    Produto,
} from '../Models/Relacionamentos.js'

class ComprasController {
    static async getCompras(req, res) {
        try {
            const pedidoCompra = await Compra.findAll({
                include: ['fornecedor', 'produtos'],
            })
            return res.json(pedidoCompra)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async getCompraById(req, res) {
        try {
            const pedidoCompra = await Compra.findByPk(req.params.id, {
                include: ['fornecedor', 'produtos'],
            })
            return res.json(pedidoCompra)
        } catch (err) {
            console.log(err)
            return res
                .status(404)
                .json({ error: 'Pedido de Compra não encontrado' })
        }
    }

    static async createCompra(req, res) {
        try {
            const pedidoCompra = await Compra.create(req.body)
            return res.json(pedidoCompra)
        } catch (err) {
            console.log(err)
            return res
                .status(400)
                .json({ error: 'Informe todos os campos obrigatórios!' })
        }
    }

    static async destroyCompra(req, res) {
        try {
            const pedidoCompra = await Compra.findByPk(req.params.id)
            await pedidoCompra.destroy()
            return res.json({
                message: 'Pedido de Compra removido com sucesso!',
            })
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json({ error: 'Pedido de Compra não encontrado' })
        }
    }

    static async updateCompra(req, res) {
        try {
            const pedidoCompra = await Compra.findByPk(req.params.id)
            await pedidoCompra.update(req.body)
            return res.json(pedidoCompra)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async createDetCompra(req, res) {
        try {
            const pedidoCompra = await Compra.findByPk(req.params.id)
            const produto = await Produto.findByPk(req.body.produtoId)
            const newDetCompra = {
                quantidade: req.body.quantidade,
                valorProduto: produto.valorCompra * req.body.quantidade,
                compraId: pedidoCompra.id,
                produtoId: produto.id,
            }
            const detCompra = await DetCompra.create(newDetCompra)
            pedidoCompra.valorTotal += detCompra.valorProduto
            await pedidoCompra.save()
            return res.json(detCompra)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async destroyDetCompra(req, res) {
        try {
            const pedidoCompra = await Compra.findByPk(req.params.id)
            const produto = await Produto.findByPk(req.body.produtoId)
            const detCompra = await DetCompra.findOne({
                where: {
                    compraId: pedidoCompra.id,
                    produtoId: produto.id,
                },
            })
            pedidoCompra.total -= detCompra.valorProduto
            await pedidoCompra.save()
            await detCompra.destroy()
            return res.json({
                message: 'Produto removido do Pedido de Compra com sucesso!',
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }
}

export default ComprasController
