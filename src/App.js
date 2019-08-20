import React from "react";
import ContactCard from "./components/ContactCard";
import "./App.css";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        alt=""
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        alt=""
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactCard
        name="Destroyer"
        imgUrl="http://placekitten.com/400/300"
        alt=""
        phone="(212) 555-3456"
        email="ofworlds@yahoo.com"
      />
      <ContactCard
        name="Felix"
        imgUrl="http://placekitten.com/200/100"
        alt=""
        phone="(212) 555-4567"
        email="mr.whiskaz@catnap.meow"
      />
    </div>
  );
}

export default App;
