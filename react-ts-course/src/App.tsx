import React from "react";
import MyC from "./basic/MyComponent";
import FetchComponent from "./fetch/FecthComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MyC
              title="Hello World"
              active={true}
              favoriteNumber={45}
              sayHello={(name) => "hello" + name}
              address={{ street: "calle 5", city: "san juan" }}
              user={{
                username: "luis",
                fullname: "luis eduardo ascanio jimenez",
                age: 24,
              }}
            />
          </Route>
          <Route exact path="/fetch">
            <FetchComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
