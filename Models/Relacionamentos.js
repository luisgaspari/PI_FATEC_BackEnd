import Cliente from '../Models/ClienteModel.js'
import Fornecedor from '../Models/FornecedorModel.js'
import Venda from '../Models/VendasModel.js'
import DetVenda from '../Models/DetVendasModel.js'
import Compra from '../Models/ComprasModel.js'
import DetCompra from '../Models/DetComprasModel.js'
import Produto from '../Models/ProdutoModel.js'

Venda.belongsTo(Cliente, { through: Venda, as: 'cliente' })
Venda.belongsToMany(Produto, { through: DetVenda, as: 'produtos' })
Produto.belongsToMany(Venda, { through: DetVenda, as: 'vendas' })
Compra.belongsTo(Fornecedor, { through: Venda, as: 'fornecedor' })
Compra.belongsToMany(Produto, { through: DetCompra, as: 'produtos' })
Produto.belongsToMany(Compra, { through: DetCompra, as: 'compras' })

export { Cliente, Fornecedor, Venda, DetVenda, Compra, DetCompra, Produto }
