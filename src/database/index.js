import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:xYANACQFgUejVzcPfiiTjQJGGmLEMRfQ@autorack.proxy.rlwy.net:42326/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:JrbktqFWegCxuUENXfOlmyuhlUAIVUBA@autorack.proxy.rlwy.net:41851',
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      },
    )
  }
}

export default new Database()
