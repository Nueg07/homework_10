const Actor = require('../model/actor')

const renderHomePage = (req, res) => {
          const data = Actor.getData();
          res.render('home', { data });
        };
        
        const renderSuccesPage = (req, res) => {
          const data = Actor.getData();
          const newUser = data[data.length - 1];
          res.render('succes', {
            data: {
              data,
              name: newUser.name,
            },
          });
        };
        
        

        module.exports = {
          renderHomePage,
          renderSuccesPage,
          
        };