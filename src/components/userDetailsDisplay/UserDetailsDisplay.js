export default function UserDetailsDisplay({item}) {
  return (
    <div>
        <br/>
        <div>id: {item.id}</div>
        <div>name: {item.name}</div>
        <div>username: {item.username}</div>
        <div>email: {item.email}</div>
        <hr/>
        <div>address: </div>
        <div>street: {item.address.street}</div>
        <div>suite: {item.address.suite}</div>
        <div>city: {item.address.city}</div>
        <div>zipcode: {item.address.zipcode}</div>
        <hr/>
        <div>phone: {item.phone}</div>
        <div>website: {item.website}</div>
    </div>
  );
}