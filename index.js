const http = require("http");

//1st. HTTP-request HTTP-response
const request = {
  method: "GET",
  url: "/users",
  headers: {
    "Content-Type": "application/json",
  },
};

const response = {
  status: 200,
  body: JSON.stringify({ message: "Användare hämtades framgångsrikt" }),
  headers: {
    "Content-Type": "application/json",
  },
};

//2nd HTTP-metoder som finns
//GET /users - Hämtar man alla användare
//POST /users - Skapar man en ny användare
//GET /users:id - Hämtar man en användare med ett specifikt id
//PUT /users:id - Uppdaterar en användare med ett specifikt id
//DELETE /users/:id - Ta bort en användare med ett specifikt ID

//3d JSON-syntax
//JavaScriptObjectNotation
const users = [
  { id: 1, name: "Goku" },
  { id: 2, name: "Vegeta" },
];

//4nd Gå igenom hur vi implementerar API-endpoints för CRUD-operationer
const server = http.createServer((req, res) => {
  switch ((req.url, req.method)) {
    case ("/users", "GET"):
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
      break;
    case ("/users", "POST"):
      req.on("data", (data) => {
        const newUser = data.toString();
        console.log("newUser", newUser);
        users.push(JSON.parse(newUser));
      });
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`server körs i port ${PORT}`));
