const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Proxy endpoint untuk bypass CORS
app.get('/api/proxy', async (req, res) => {
    try {
        const { username, token, captcha } = req.query;
        
        if (!username || !token || !captcha) {
            return res.status(400).json({
                success: false,
                error: 'Missing required parameters'
            });
        }

        // Panggil API eksternal
        const apiUrl = `https://asndigital.bkn.go.id/api/forget-password?username=${username}&token=${encodeURIComponent(token)}&captcha=${captcha}`;
        
        const response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            timeout: 10000 // 10 detik timeout
        });

        // Kirim response ke client
        res.json({
            success: true,
            data: response.data,
            status: response.status
        });

    } catch (error) {
        console.error('Proxy error:', error.message);
        
        res.status(error.response?.status || 500).json({
            success: false,
            error: error.message,
            details: error.response?.data || null
        });
    }
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════╗
║   NI PPPK FINDER SERVER RUNNING       ║
║                                       ║
║   URL: http://localhost:${PORT}        ║
║   Status: ✅ Ready                     ║
╚═══════════════════════════════════════╝
    `);
});