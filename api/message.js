// A simple variable to hold the latest message in the serverless instance
let currentMessage = { text: "", id: 0 };

export default function handler(req, res) {
    if (req.method === 'POST') {
        // When the remote sends a message, update it and give it a unique ID
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        currentMessage = { text: body.text, id: Date.now() };
        return res.status(200).json({ success: true });
    }
    
    // When the TV checks for messages, send the current one back
    return res.status(200).json(currentMessage);
}
