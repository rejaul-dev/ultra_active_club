import React from "react";

const Questions = () => {
  return (
    <div>
      
        {/* question part */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box mt-16"
        >
          <div className="collapse-title text-lg font-medium">
          How does React works?
          </div>
          <div className="collapse-content">
            <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
        >
          <div className="collapse-title text-lg font-medium">
          Difference between props and states?
          </div>
          <div className="collapse-content">
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
        >
          <div className="collapse-title text-lg font-medium">
          What does useEffect do without fetch data?
          </div>
          <div className="collapse-content">
            <p>The useEffect Hook let us perform side effects in function components. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
          </div>
        </div>
    </div>
  );
};

export default Questions;
