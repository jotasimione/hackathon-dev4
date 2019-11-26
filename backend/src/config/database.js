module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './src/database/database',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    dialect: 'sqlite',
    storage: './src/database/database',
  },
};
