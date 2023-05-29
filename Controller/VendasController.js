import { Venda, DetVenda, Cliente, Produto } from '../Models/Relacionamentos.js'

class VendasController {
    static async getVendas(req, res) {
        try {
            const pedidoVenda = await Venda.findAll({
                include: ['cliente', 'produtos'],
            })
            return res.json(pedidoVenda)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async getVendaById(req, res) {
        try {
            const pedidoVenda = await Venda.findByPk(req.params.id, {
                include: ['cliente', 'produtos'],
            })
            return res.json(pedidoVenda)
        } catch (err) {
            console.log(err)
            return res
                .status(404)
                .json({ error: 'Pedido de Venda não encontrado' })
        }
    }

    static async createVenda(req, res) {
        try {
            const pedidoVenda = await Venda.create(req.body)
            return res.json(pedidoVenda)
        } catch (err) {
            console.log(err)
            return res
                .status(400)
                .json({ error: 'Informe todos os campos obrigatórios!' })
        }
    }

    static async destroyVenda(req, res) {
        try {
            const pedidoVenda = await Venda.findByPk(req.params.id)
            await pedidoVenda.destroy()
            return res.json({
                message: 'Pedido de Venda removido com sucesso!',
            })
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json({ error: 'Pedido de Venda não encontrado' })
        }
    }

    static async updateVenda(req, res) {
        try {
            const pedidoVenda = await Venda.findByPk(req.params.id)
            await pedidoVenda.update(req.body)
            return res.json(pedidoVenda)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async createDetVenda(req, res) {
        try {
            const pedidoVenda = await Venda.findByPk(req.params.id)
            const produto = await Produto.findByPk(req.body.produtoId)
            const newDetVenda = {
                quantidade: req.body.quantidade,
                personalizacao: req.body.personalizacao,
                valorProduto: produto.valorVenda * req.body.quantidade,
                vendaId: pedidoVenda.id,
                produtoId: produto.id,
            }
            const detVenda = await DetVenda.create(newDetVenda)
            pedidoVenda.totalPedido += detVenda.valorProduto
            await pedidoVenda.save()
            return res.json(detVenda)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }

    static async destroyDetVenda(req, res) {
        try {
            const pedidoVenda = await Venda.findByPk(req.params.id)
            const produto = await Produto.findByPk(req.body.produtoId)
            const detVenda = await DetVenda.findOne({
                where: {
                    vendaId: pedidoVenda.id,
                    produtoId: produto.id,
                },
            })
            pedidoVenda.totalPedido -= detVenda.valorProduto
            await pedidoVenda.save()
            await detVenda.destroy()
            return res.json({
                message: 'Produto removido do Pedido de Venda com sucesso!',
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }
}

export default VendasController
