import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="">
        <p className="text-2xl">
          1.Tell us the differences between uncontrolled and controlled
          components.
        </p>
        <p>
          In React, controlled components are components that manage their own
          state and update it based on user input, while uncontrolled components
          rely on the DOM to manage their state. Here are some key differences
          between controlled and uncontrolled components: 1. In controlled
          components, the state is managed by React and updated through
          callbacks, while in uncontrolled components, the state is managed by
          the DOM and accessed through refs. 2. Controlled components are
          typically more verbose, as they require more code to set up and manage
          state. Uncontrolled components can be simpler to set up but may be
          harder to customize. 3. Controlled components offer more fine-grained
          control over user input, as you can validate and transform data before
          it is sent to the server. Uncontrolled components offer less control
          but may be faster and easier to work with. 4. Controlled components
          are recommended for most use cases, as they provide a better user
          experience and are easier to test and maintain. Uncontrolled
          components may be useful in certain cases where performance is
          critical. 5. When using controlled components, you can easily
          implement features like form validation and real-time updates, while
          uncontrolled components can be useful for handling simple inputs like
          text or checkboxes.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
