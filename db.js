import { Sequelize } from 'sequelize'

const db = new Sequelize('database', 'user', 'passw', {
    dialect: 'sqlite',
    storage: './db.sqlite',
})

export default db
