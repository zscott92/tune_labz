var config = {}

config.endpoint = '~your Azure Cosmos DB account endpoint uri here~'
config.key = '~your primary key here~'

config.database = {
  id: 'FamilyDatabase'
}

config.container = {
  id: 'FamilyContainer'
}

config.items = {
  track: {
    id: 'Anderson.1',
    Country: 'USA',
    lastName: 'Andersen',
    parents: [
      {
        firstName: 'Thomas'
      },
      {
        firstName: 'Mary Kay'
      }
    ]
}
}

module.exports = config