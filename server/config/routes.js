const authors = require('../controllers/events');


module.exports = function (app) {
    app.get('/api/events', (req, res) => events.index(req, res));
    app.post('/api/create', (req, res) => events.create(req, res));    
    app.put('/api/edit/:id', (req, res) => events.edit(req, res));
    app.delete('/api/delete/:id', (req, res) => events.remove(req, res));
    app.get('/api/author/:id', (req, res) => events.show(req,res)); 
}