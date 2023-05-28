import { Cliente } from '../Models/Relacionamentos.js'

class ClienteController {
    static async getClientes(req, res) {
        const cliente = await Cliente.findAll()
        res.json(cliente)
    }

    static async createCliente(req, res) {
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

        const createdCliente = await Cliente.create(req.body)
        res.status(201).json(createdCliente)
    }

    static async getClienteById(req, res) {
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if (!cliente) {
            res.status(404).json({ error: 'Não encontrado.' })
            return
        }
        res.status(200).json(cliente)
    }

    static async destroyCliente(req, res) {
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if (!cliente) {
            res.status(404).json({ error: 'Não encontrado.' })
            return
        }
        await Cliente.destroy({ where: { id: cliente.id } })
        res.json({ message: 'Removido com sucesso!' })
    }

    static async updateCliente(req, res) {
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if (!cliente) {
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

        const updatedCliente = await Cliente.update(
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
            { where: { id: cliente.id } }
        )
        return res.json(updatedCliente)
    }
}

export default ClienteController
