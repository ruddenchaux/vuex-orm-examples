let countTodos = 3;

const proxy = {
  'GET /api/todo': (req, res) => {
    return res.json([
        {
          id: 1,
          user_id: 1,
          title: 'Create awesome application!',
          done: false,
          assignee: { id: 1, name: 'John Doe' }
        },
        {
          id: 2,
          user_id: 1,
          title: 'Read the documentation',
          done: false,
          assignee: { id: 1, name: 'John Doe' }
        },
        {
          id: 3,
          user_id: 2,
          title: 'Star Vuex ORM repository',
          done: false,
          assignee: { id: 2, name: 'Jane Doe' }
        }
      ]);
  },
  'POST /api/todo': (req, res) => {
    const data = req.body

    data.id = ++countTodos

    return res.json(data)
  },
  'PUT /api/todo/:id': (req, res) => {
    const id = req.params.id
    const data = req.body

    data.id = parseInt(id)

    return res.json(data)
  },
  'DELETE /api/todo/:id': (req, res) => {
    return res.json({"success": true})
  },

  'PUT /api/user/:id': (req, res) => {
    const id = req.params.id
    const data = req.body

    data.id = parseInt(id)

    return res.json(data)
  },
  'DELETE /api/user/:id': (req, res) => {
    res.json({"success": true})
  }
}
module.exports = proxy;