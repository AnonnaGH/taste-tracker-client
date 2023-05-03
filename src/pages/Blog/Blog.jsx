import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='header-bg'>

            </div>
            <div className="row container mx-auto">
                <div className='my-5 border'>
                    <h1 className="font-bold p-4">1.Tell us the differences between uncontrolled and controlled components.
                    </h1>
                    <p className="bg-light p-4 ">

                        Uncontrolled components and controlled components are terms commonly used in the context of web development, especially when building forms.

                        Uncontrolled components refer to form inputs that are not managed by React, a popular JavaScript library for building user interfaces. When an uncontrolled component is rendered, React does not manage its state, and the value of the input is determined by the user's interaction with it. For example, an uncontrolled input might be an HTML input element with a value attribute that is not linked to any React state variable.

                        On the other hand, controlled components are form inputs that are managed by React. When a controlled component is rendered, React manages its state, and the value of the input is controlled by the state of a React component. For example, a controlled input might be an HTML input element with a value attribute that is linked to a state variable in a React component.
                        <br></br><br></br>
                        The main differences between uncontrolled and controlled components are:
                        <br></br>
                        <b>State management:</b> Uncontrolled components do not have state managed by React, while controlled components have state managed by React.
                        <br></br>
                        <b>Data flow:</b> Uncontrolled components allow the data to flow from the DOM to React, while controlled components allow the data to flow from React to the DOM.
                        <br></br>
                        <b>Validation:</b> With uncontrolled components, data validation must be done manually, while with controlled components, data validation can be done automatically by React.
                        <br></br>
                        <b>Event handling:</b> With uncontrolled components, event handling must be done manually, while with controlled components, event handling can be done using React event handlers.
                        <br></br><br></br>
                        In general, using controlled components is recommended in most cases, as they provide better control over the state of the form and allow for better validation and event handling. However, there are cases where uncontrolled components may be useful, especially when dealing with legacy code or when working with third-party libraries that require uncontrolled inputs.
                    </p>
                </div>
                <div className="my-5 border">
                    <h1 className="font-bold p-4">2.How to validate React props using PropTypes
                    </h1>
                    <p className="bg-light p-4 ">
                        In React, PropTypes is a built-in library that allows developers to validate the props passed to a component. PropTypes is a type-checking library that helps developers catch bugs and errors earlier in the development process. Here's how to validate React props using PropTypes:

                        1. Import the PropTypes library at the top of your component file:
                        <br></br> <code>import PropTypes from 'prop-types';</code>
                        <br></br>2.Define the expected propTypes for your component using the PropTypes object. This is typically done outside the component's render method:
                        <br></br>
                        <pre>
                            <code>
                                {`
                                MyComponent.propTypes = { 
                                propOne: PropTypes.string,
                                propTwo: PropTypes.number.isRequired,
                                propThree: PropTypes.func,
                                propFour: PropTypes.arrayOf(PropTypes.string)
                          }; 
`}

                            </code>
                        </pre>
                        In this example, we've defined four propTypes: propOne is a string, propTwo is a required number, propThree is a func (function), and propFour is an array of strings.
                        <br></br><br></br>
                        3.Pass the props to your component. React will automatically check the propTypes and throw a warning in the console if a prop doesn't match the expected type or is missing a required prop.
                        <br></br><br></br>
                        It's important to note that PropTypes are not enforced at runtime, but rather used for development purposes to help catch bugs and ensure that components are being used correctly.

                        In addition to the basic data types like string, number, and bool, PropTypes also provides more advanced validation such as arrayOf, objectOf, oneOf, and oneOfType. You can also create custom validation by writing your own validator function.

                        By using PropTypes to validate props, you can catch potential bugs and errors early in the development process, which can save you time and effort in the long run.
                    </p>
                </div>

                <div className="my-5 border">
                    <h1 className="font-bold p-4">3.Tell us the difference between nodejs and express js.
                    </h1>
                    <p className=" bg-light p-4">
                        Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side, outside of the web browser. It provides a platform for building server-side applications with JavaScript, and includes a number of built-in modules for working with file systems, networking, and other system-level tasks.

                        Express.js, on the other hand, is a popular web framework for Node.js that provides a set of tools and features for building web applications and APIs. It's built on top of Node.js and makes it easier to handle HTTP requests, define routes, manage sessions, and more.

                        Here are some key differences between Node.js and Express.js:
                        <br></br><br></br>
                        1.Node.js is a runtime environment, while Express.js is a web framework built on top of Node.js.
                        <br></br><br></br>
                        2.Node.js provides core modules for working with file systems, networking, and other system-level tasks, while Express.js provides additional modules and features for handling HTTP requests, routing, middleware, and more.
                        <br></br><br></br>
                        3.Node.js can be used to build a wide range of applications, including command-line tools, desktop applications, and web applications, while Express.js is specifically designed for building web applications and APIs.
                        <br></br><br></br>
                        4.Node.js is relatively low-level and requires more manual configuration and setup, while Express.js provides higher-level abstractions and conventions that make it easier to build web applications quickly.
                        <br></br><br></br>
                        In summary, Node.js provides the runtime environment for running JavaScript on the server-side, while Express.js provides the tools and features for building web applications and APIs on top of Node.js. While they are related, they serve different purposes and are used in different ways.
                    </p>
                </div>



            </div>
        </div>
    );
};

export default Blog;