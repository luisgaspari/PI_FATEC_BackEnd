import { Produto } from '../Models/Relacionamentos.js'

class ProdutoController {
    static async getProdutos(req, res) {
        const produto = await Produto.findAll()
        res.json(produto)
    }

    static async procura(req, res) {}

    static async createProduto(req, res) {
        const {
            descricao,
            fichaTecnica,
            unidadeMedida,
            tipoProduto,
            valorCompra,
            valorVenda,
            estoque,
        } = req.body
        if (
            !descricao ||
            !fichaTecnica ||
            !unidadeMedida ||
            !tipoProduto ||
            !valorCompra ||
            !valorVenda
        ) {
            res.status(400).json({ error: 'Informe todos os campos!' })
            return
        }

        const createdProduto = await Produto.create(req.body)
        res.status(201).json(createdProduto)
    }

    static async getProdutoById(req, res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: 'Não encontrado.' })
            return
        }
        res.status(200).json(produto)
    }

    static async destroyProduto(req, res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: 'Não encontrado.' })
            return
        }
        await Produto.destroy({ where: { id: produto.id } })
        res.json({ message: 'Removido com sucesso!' })
    }

    static async updateProduto(req, res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: 'Não encontrado' })
            return
        }

        const {
            descricao,
            fichaTecnica,
            unidadeMedida,
            tipoProduto,
            valorCompra,
            valorVenda,
        } = req.body
        if (
            !descricao ||
            !fichaTecnica ||
            !unidadeMedida ||
            !tipoProduto ||
            !valorCompra ||
            !valorVenda
        ) {
            res.status(400).json({
                error: 'Informe todos os campos obrigatórios!',
            })
            return
        }

        const updatedProduto = await Produto.update(
            {
                descricao,
                fichaTecnica,
                unidadeMedida,
                tipoProduto,
                valorCompra,
                valorVenda,
            },
            { where: { id: produto.id } }
        )
        res.json(updatedProduto)
    }
}

export default ProdutoController
