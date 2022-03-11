import { useState } from "react";
import Todo from "./Todo";

async function fetchTodos(userId) {
  let api = "https://jsonplaceholder.typicode.com/todos";
  if (userId) {
    api = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
  }
  const res = await fetch(api)
  const todos = await res.json();
  return todos;
}

async function fetchUser(userId) {
  if (!userId) return null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  return user;
}

export async function getServerSideProps(request, response) {
  const { userid } = request.query;
  const [user, todos] = await Promise.all([
    fetchUser(userid),
    fetchTodos(userid),
  ]);
  return {
    props: {
      todos,
      user
    }
  }
}

export default function Todos({ user, todos }) {
  const [todosData, setTodosData] = useState(todos);
  const onDelete = (todo) => () => {
    const newTodos = todosData.filter(onetodo => onetodo.id !== todo.id);
    console.log(newTodos);
    setTodosData(newTodos);
  }

  const pageTitle = user ? `${user.name}'s Todos` : 'All Todos';

  return (
    <>
      <h1 className="page-title">{pageTitle} </h1>
      {todosData.map(todo =>
        <Todo key={todo.id} {...todo} onDelete={onDelete(todo)} />
      )}
    </>
  )
}
