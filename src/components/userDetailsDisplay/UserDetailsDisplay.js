export default function UserDetailsDisplay({item}) {
  return (
    <div>
        <div>id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>username: {item.username}</div>
        <div>email: {item.email}</div>
        <div>phone: {item.phone}</div>
        <div>website: {item.website}</div>
    </div>
  );
}