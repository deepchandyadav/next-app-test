import { useState } from "react";
import Todo from "./Todo";
import { fetchTodos, fetchUser } from "../../helpers";

export async function getServerSideProps(context) {
  const { userid } = context.query;
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
