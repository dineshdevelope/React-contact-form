import { useParams } from "react-router-dom";

import AccordianPage from "./AccordianPage";

const MainPage = () => {
  const { name } = useParams();

  return (
    <div>
      <div>
        <h1 className=" font-serif text-2xl text-center p-10 rounded-2xl bg-white">
          <h5></h5>
        </h1>

        <div className="bg-white my-10 p-10 rounded-2xl">
          <h4 className="font-semi-bold text-2xl">FAQs</h4>
          <div className="my-5 space-y-5">
            <AccordianPage
              title="React Component is Reuseable ?"
              desc="Yes, it's reuseable"
            />
            <AccordianPage
              title="What is the main purpose of React components ?"
              desc="Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
