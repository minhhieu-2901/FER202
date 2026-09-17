//Destructuring props

function User({ name, age, address, onClick }) {
  return (
    <div>
      <h2>Hello my name is {name}</h2>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default User;
