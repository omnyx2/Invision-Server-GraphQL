const resolvers = {
  Query: {
    hello:(_, {name}) =>`Hello${name || world}`,
  }
}

export default resolvers
