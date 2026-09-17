import React from "react";

// function Counter() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       {count}
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }

// export default Counter;

// function Toggle() {
//   const [isOn, setIsOn] = React.useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
//     </div>
//   );
// }

// export default Toggle;

// function Test() {
//   const [name, setName] = React.useState("");
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>{name}</p>
//     </div>
//   );
// }
// export default Test;

function StateObject() {
  const [user, setUser] = React.useState({
    name: "",
    age: 0,
  });
  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
      />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default StateObject;
