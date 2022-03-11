import Link from "next/link";

export default function User({ id, name }) {
  return <div className="user">
    <p>{name}</p>
    <button>
      <Link href={`/todos?userid=${id}`}>{`${name}'s Todo`}</Link>
    </button>
  </div>;
}

