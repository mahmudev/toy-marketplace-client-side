import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blog");
  return (
    <div className="container  min-h-screen my-10 mx-auto">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="mb-8 text-3xl tracking-tight font-bold text-gray-900">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <div className="mb-10  text-gray-500 px-4">
          <p className="py-4">
            Access tokens and refresh tokens are both used for authentication
            and authorization purposes in web applications.
          </p>
          An access token is a unique identifier that is issued by an
          authorization server to a client application after the user has
          provided their login credentials. This token is then included in every
          subsequent request made by the client application to the resource
          server in order to access protected resources. The access token
          typically has a limited lifespan and will expire after a certain
          amount of time.
          <p className="py-4">
            A refresh token is also issued by the authorization server along
            with the access token. Its purpose is to allow the client
            application to obtain a new access token once the current one has
            expired. The refresh token is a long-lived token that can be used to
            obtain new access tokens without requiring the user to log in again.
          </p>
          Both access and refresh tokens need to be stored securely on the
          client-side. It is recommended to store them in an HTTP-only cookie or
          in local storage with appropriate security measures such as encryption
          or hashing. Storing tokens in plain text or in insecure locations can
          expose them to potential attacks, leading to unauthorized access to
          protected resources.
        </div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="mb-8 text-3xl tracking-tight font-bold text-gray-900">
          2. Compare SQL and NoSQL databases?
        </h2>
        <div className="mb-10  text-gray-500 px-4">
          <p className="py-4">
            SQL and NoSQL databases are two different types of database
            management systems that serve different purposes.
          </p>
          SQL databases, also known as relational databases, store data in a
          structured format with tables consisting of rows and columns. They
          have a fixed schema, meaning that the structure of the data must be
          defined before any data can be inserted. SQL databases are widely used
          in enterprise applications where data consistency is critical, and
          transactions need to be processed quickly and efficiently.
          <p className="py-4">
            NoSQL databases, on the other hand, store data in an unstructured or
            semi-structured format. They do not rely on a fixed schema and allow
            for flexibility in adding new fields or documents. NoSQL databases
            can handle large amounts of unstructured data, making them
            well-suited for big data analytics and real-time applications.
          </p>
          Another key difference between SQL and NoSQL databases is their
          approach to scaling. SQL databases typically scale vertically by
          increasing the hardware resources of a single server, while NoSQL
          databases scale horizontally by adding more servers to distribute the
          workload.
          <p className="py-4">
            In summary, SQL databases offer strong data consistency and
            transactional processing capabilities, whereas NoSQL databases
            provide flexibility and scalability for handling large amounts of
            unstructured data in real-time applications. The choice between the
            two depends on the specific needs of the application and its data
            requirements.
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="mb-8 text-3xl tracking-tight font-bold text-gray-900">
          3. What is express js? What is Nest JS?
        </h2>
        <div className="mb-10  text-gray-500 px-4">
          <p className="py-4">
            Express.js is a minimalistic and flexible web application framework
            for Node.js. It provides a simple and unopinionated approach to
            building web applications and APIs. Express.js allows developers to
            create robust and scalable server-side applications by providing a
            set of lightweight middleware functions that can be easily
            integrated into the application's request-response cycle. It offers
            features such as routing, middleware support, and template engine
            integration, making it a popular choice for creating server-side
            applications and RESTful APIs.
          </p>
          NestJS, on the other hand, is a progressive, efficient, and
          opinionated framework for building scalable and maintainable
          server-side applications. It is built with TypeScript and heavily
          inspired by Angular's architecture and concepts. NestJS leverages the
          power of TypeScript to bring strong typing, decorators, and dependency
          injection to Node.js development. It provides a modular structure with
          well-defined modules, controllers, and services, promoting code
          reusability and separation of concerns. NestJS supports a wide range
          of features such as routing, authentication, validation, and database
          integration, making it suitable for building complex and
          enterprise-grade applications.
          <p className="py-4">
            In summary, Express.js is a lightweight and flexible web application
            framework, while NestJS is a feature-rich and opinionated framework
            that brings Angular-like concepts and TypeScript to Node.js
            development.
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="mb-8 text-3xl tracking-tight font-bold text-gray-900">
          4. What is MongoDB aggregate and how does it work?
        </h2>
        <div className="mb-10  text-gray-500 px-4">
          <p className="py-4">
            MongoDB's aggregate is a powerful framework that allows for advanced
            data processing and analysis in MongoDB. It enables developers to
            perform complex operations on collections of documents, such as
            filtering, grouping, sorting, transforming, and computing
            aggregations. The aggregate framework follows a pipeline-based
            approach, where data is passed through multiple stages to produce
            the desired results.
          </p>
          The aggregation pipeline consists of one or more stages, with each
          stage performing a specific operation on the input documents and
          passing the results to the next stage. Some common stages include
          $match (to filter documents), $group (to group documents based on
          specified criteria), $project (to reshape and transform documents),
          $sort (to sort documents), and $limit (to limit the number of output
          documents).
          <p className="py-4">
            By combining different stages in the pipeline, developers can create
            complex data transformations and aggregations. The pipeline stages
            are executed in the order they are specified, allowing for a
            flexible and customizable data processing flow. Aggregation
            expressions and operators provide additional functionality, enabling
            calculations, conditional operations, and array manipulations within
            the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
