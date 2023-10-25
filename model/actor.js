const data = [
          {
                    name : 'jerico'
          },

          {name : 'rivaldi'
          }
]

class Actor {
          static getData() {
                    return data
          }

          static getOneData(id) {
                    return data[id]
          }

          static addData(payload) {
                    data.push(payload)
                    return data
          }

}
module.exports = Actor