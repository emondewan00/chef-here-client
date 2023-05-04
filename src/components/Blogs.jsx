import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-2xl">
            1.Tell us the differences between uncontrolled and controlled
            components.
          </p>
          <p>
            In React, controlled components are components that manage their own
            state and update it based on user input, while uncontrolled
            components rely on the DOM to manage their state. Here are some key
            differences between controlled and uncontrolled components: 1. In
            controlled components, the state is managed by React and updated
            through callbacks, while in uncontrolled components, the state is
            managed by the DOM and accessed through refs. 2. Controlled
            components are typically more verbose, as they require more code to
            set up and manage state. Uncontrolled components can be simpler to
            set up but may be harder to customize. 3. Controlled components
            offer more fine-grained control over user input, as you can validate
            and transform data before it is sent to the server. Uncontrolled
            components offer less control but may be faster and easier to work
            with. 4. Controlled components are recommended for most use cases,
            as they provide a better user experience and are easier to test and
            maintain. Uncontrolled components may be useful in certain cases
            where performance is critical. 5. When using controlled components,
            you can easily implement features like form validation and real-time
            updates, while uncontrolled components can be useful for handling
            simple inputs like text or checkboxes.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-2xl">
            2.How to validate React props using PropTypes
          </p>
          <p>
            React provides a built-in library called PropTypes that can be used
            to validate the props passed to a component.{" "}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-2xl">
            Tell us the difference between nodejs and express js.
          </p>
          <p>
            Node.js and Express.js are both popular technologies used for web
            development with JavaScript, but they have some fundamental
            differences: 1. Node.js is a JavaScript runtime that allows you to
            run JavaScript code outside of a web browser, while Express.js is a
            web application framework built on top of Node.js. 2. Node.js
            provides a runtime environment for executing JavaScript code,
            including access to the file system, network sockets, and other
            system resources. Express.js provides a set of tools and conventions
            for building web applications using Node.js. 3. Node.js is a
            lower-level technology that provides a basic set of APIs for
            building web applications, while Express.js provides higher-level
            abstractions that make it easier to build web applications. 4.
            Node.js provides a built-in HTTP module that can be used to create
            an HTTP server, but it requires more code to build a complete web
            application. Express.js provides a simpler and more declarative API
            for creating HTTP endpoints, handling requests and responses, and
            managing middleware. 5. Node.js can be used to build a wide range of
            applications beyond web development, such as command-line tools,
            desktop applications, and IoT devices. Express.js is specifically
            designed for building web applications and provides a set of
            features optimized for that use case. In summary, Node.js provides a
            JavaScript runtime environment, while Express.js is a web
            application framework built on top of Node.js that provides a
            simpler and more declarative API for building web applications.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-2xl">
            What is a custom hook, and why will you create a custom hook?
          </p>
          <p>
            In React, a custom hook is a function that allows you to reuse logic
            between components. Custom hooks are created by extracting common
            logic from a component and encapsulating it in a reusable function.
            Here are some reasons why you might create a custom hook: 1. To
            reuse logic across multiple components. Custom hooks allow you to
            encapsulate common logic and share it between multiple components,
            making it easier to maintain and update your code. 2. To simplify
            complex logic. If you have complex logic that needs to be used
            across multiple components, a custom hook can simplify the
            implementation and make it easier to understand and manage. 3. To
            separate concerns and improve readability. By extracting logic into
            a custom hook, you can separate concerns and improve the readability
            of your code. This can make it easier to understand and modify your
            code in the future. 4. To improve testability. Custom hooks can make
            it easier to test your code by isolating logic into a separate
            function that can be tested independently of your components. 5. To
            create a custom abstraction over third-party libraries. If you are
            using a third-party library that has complex initialization or
            requires additional setup, a custom hook can encapsulate that logic
            and provide a simpler and more intuitive interface for your
            components. Overall, custom hooks provide a powerful abstraction for
            reusing logic and improving the maintainability and testability of
            your code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
