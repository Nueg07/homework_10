const getActors = (req, res) => {
          
          const actors = getActorsData(); 
          res.status(200).json(actors);
        }
const addActors= (req, res) => {
          const { name } = req.body
          console.log(name)
          
          const data = add.addData({ name })
          res.redirect('/succes')
}

const upload = (req, res) => {
          res.status(200).json({
                    message : 'Succes Upload'

          })
}

module.exports = {
          getActors,
          addActors,
          upload
}