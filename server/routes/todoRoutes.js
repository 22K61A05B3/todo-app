const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers');

const router = express.Router();

router.get('/', getTodos);  // Ensure getTodos is correctly imported
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
