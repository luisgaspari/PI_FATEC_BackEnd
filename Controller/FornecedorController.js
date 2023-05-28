import { Fornecedor } from '../Models/Relacionamentos.js'

class FornecedorController {
    static async getFornecedores(req, res) {
        const fornecedores = await Fornecedor.findAll()
        res.json(fornecedores)
    }

    static async getFornecedorById(req, res) {
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
        if (!fornecedor) {
            res.status(404).json({ error: 'Não encontrado' })
        }
        res.json(fornecedor)
    }

    static async destroyFornecedor(req, res) {
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
        if (!fornecedor) {
            res.status(404).json({ error: 'Não encontrado' })
            return
        }
        await Fornecedor.destroy({ where: { id: fornecedor.id } })
        res.json({ message: 'Removido com sucesso!' })
    }

    static async createFornecedor(req, res) {
        const {
            nome,
            cpf,
            telefone,
            cep,
            estado,
            cidade,
            bairro,
            endereco,
            complemento,
            email,
        } = req.body
        if (
            !nome ||
            !cpf ||
            !telefone ||
            !cep ||
            !estado ||
            !cidade ||
            !bairro ||
            !endereco ||
            !email
        ) {
            res.status(400).json({
                error: 'Informe todos os campos obrigatórios!',
            })
            return
        }

        const createdFornecedor = await Fornecedor.create(req.body)
        res.status(201).json(createdFornecedor)
    }

    static async updateFornecedor(req, res) {
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
        if (!fornecedor) {
            res.status(404).json({ error: 'Não encontrado' })
            return
        }

        let {
            nome,
            cpf,
            telefone,
            cep,
            estado,
            cidade,
            bairro,
            endereco,
            complemento,
            email,
        } = req.body
        if (
            !nome ||
            !cpf ||
            !telefone ||
            !cep ||
            !estado ||
            !cidade ||
            !bairro ||
            !endereco ||
            !email
        ) {
            res.status(400).json({
                error: 'Informe todos os campos obrigatórios!',
            })
            return
        }

        if (!complemento) complemento = null

        const updatedFornecedor = await Fornecedor.update(
            {
                nome,
                cpf,
                telefone,
                cep,
                estado,
                cidade,
                bairro,
                endereco,
                complemento,
                email,
            },
            { where: { id: fornecedor.id } }
        )
        res.json(updatedFornecedor)
    }
}

export default FornecedorController
