const server = require('./app');

const PORT = process.env.PORT || 3000;

// Starting Server
server.listen(PORT, function() {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
