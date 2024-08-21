// Create web server
// 1. Create server
// 2. Add request handler
// 3. Start server
// 4. Add request handlers for different paths
// 5. Add comments to comments.js
// 6. Add comments to index.js

// 1. Create server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from the server!');
});

// 3. Start server
server.listen(3000, '