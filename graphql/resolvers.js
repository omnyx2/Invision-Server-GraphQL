const recoder = () => {
  console.log(" [REQUEST] Proccessing... :" + "(Done)")
}




const resolvers = {
  Query: {
    hello:(_, {name}) => {
      recoder()
        return `Hello${name || world}`
    },

  }
}

export default resolvers
