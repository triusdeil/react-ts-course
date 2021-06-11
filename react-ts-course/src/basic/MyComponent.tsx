import React, { useState, useRef } from "react";

interface User {
  username: string;
  fullname: string;
  age: number;
}

interface MyProps {
  title: string;
  favoriteNumber: number;
  active: boolean;
  sayHello: (name: string) => string;
  address: { street: string; city: string };
  user: User;
}

const MyComponent = ({
  address,
  title,
  active,
  favoriteNumber,
  sayHello,
}: MyProps) => {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      console.log(e.target.value)
  }

  return (
    <div className="">
      <h1>{title}</h1>
      <h2>{active}</h2>
      <h2>{favoriteNumber}</h2>
      <h2>{sayHello("luis")}</h2>
      <h6>{address.city + " " + address.street}</h6>
      <p>Number: {count}</p>
      <button onClick={() => setCount(count + 1)}>Contador</button>
      <form>
        <input type="text" placeholder="Write something" ref={inputRef} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default MyComponent;
