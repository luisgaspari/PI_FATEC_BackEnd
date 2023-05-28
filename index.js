import express from 'express'
import cors from 'cors'
import db from './db.js'

import ClienteRouter from './Routes/ClienteRoute.js'
import ProdutoRouter from './Routes/ProdutoRoute.js'
import ComprasRouter from './Routes/ComprasRoute.js'
import VendasRouter from './Routes/VendasRoute.js'
import FornecedorRouter from './Routes/FornecedorRoute.js'

const app = express()
app.use(express.json())
app.use(cors())

db.sync(() => console.log('Banco de dados preparado'))

app.use('/clientes', ClienteRouter)
app.use('/produtos', ProdutoRouter)
app.use('/compras', ComprasRouter)
app.use('/vendas', VendasRouter)
app.use('/Fornecedores', FornecedorRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('API Rodando na porta 3000!')
})
