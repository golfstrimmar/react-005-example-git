import React, {Fragment} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";

const Home = () => {
 const notes= new Array(3).fill('').map((_, i) => ({ id: i, title: `note ${i+1}`}))
  return (
    <Fragment>
      <Form />
      <hr />
      <Notes notes={notes} />
    </Fragment>
  );
};


export default Home;
