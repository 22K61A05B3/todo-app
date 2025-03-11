const API_URL = 'http://localhost:5000/api/todos'; // Correct URL
export const getTodos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const createTodo = async (title) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return response.json();
};

export const updateTodo = async (id, completed) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
