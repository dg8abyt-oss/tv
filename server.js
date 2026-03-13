const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serve the files in the 'public' folder
app.use(express.static('public'));

// The main TV page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// The phone remote page
app.get('/talk', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'talk.html'));
});

// Handle real-time messages
io.on('connection', (socket) => {
    console.log('A device connected!');
    
    socket.on('speak', (msg) => {
        // Send the message to all connected screens (the TV)
        io.emit('displayMessage', msg);
    });
});

// Start the server
const PORT = 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`TV App running! Open http://localhost:${PORT} on your computer.`);
});
