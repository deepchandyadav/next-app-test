import User from "./User";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json();
  return {
    props: {
      users
    }
  }
}

export default function Users({ users }) {
  return (
    <>
      <h1 className="page-title">All Users</h1>
      {users.map(user =>
        <User key={user.id} {...user} />
      )}
    </>
  )
}
