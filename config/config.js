module.exports = {
    "development": {
      "username": process.env.DEV_USERNAME,
      "password": process.env.DEV_PASSWORD,
      "database": process.env.DEV_DATABASE,
      "host": process.env.DEV_HOST,
      "port": process.env.DEV_PORT,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "null",
      "database": "database_test",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    }
  }