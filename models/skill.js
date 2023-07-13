const skills = [
  {
    id: 125223,
    skill: "Node.js",
    description:
      "Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser. It uses an event-driven, non-blocking I/O model, making it highly efficient for handling concurrent operations. Node.js enables server-side scripting, powering the back-end of web applications, and supports the development of scalable network applications. It utilizes the V8 JavaScript engine, originally built for Google Chrome, to execute JavaScript code on the server side. With its vast ecosystem of packages and modules, Node.js provides a powerful platform for building fast and lightweight applications that can handle a large number of connections simultaneously.",
  },
  {
    id: 127904,
    skill: "Express",
    description:
      "Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the process of building web applications by providing a set of robust features and utilities. With Express.js, developers can handle routing, middleware management, and HTTP request/response handling in a straightforward manner. It offers a simple and intuitive API for creating server-side applications and RESTful APIs. Express.js promotes modular and reusable code through middleware functions, allowing developers to add functionality at various stages of the request/response cycle. It is lightweight, scalable, and widely adopted, making it an ideal choice for building web applications with Node.js.",
  },
  {
    id: 139608,
    skill: "MongoDB",
    description:
      "MongoDB is a popular open-source, NoSQL database that provides high performance, scalability, and flexibility for managing unstructured data. It stores data in a document-oriented format called BSON (Binary JSON), allowing for easy and efficient retrieval and manipulation. MongoDB's schema-less nature enables dynamic and agile development, accommodating evolving data structures without the need for rigid table schemas. It supports powerful query capabilities, including indexing, aggregation, and geospatial queries. MongoDB's distributed architecture and horizontal scaling capabilities make it well-suited for handling large volumes of data and high traffic loads. It is commonly used in modern web applications, analytics, and real-time data processing scenarios.",
  },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill){
  skill.id = Date.now() % 1000000;
  skills.push(skill);
  console.log(skill)
  console.log(skills)
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}