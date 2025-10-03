const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { username, token, captcha } = req.query;
        
        if (!username || !token || !captcha) {
            return res.status(400).json({ success: false, error: 'Missing parameters' });
        }

        const apiUrl = `https://asndigital.bkn.go.id/api/forget-password?username=${username}&token=${encodeURIComponent(token)}&captcha=${captcha}`;
        
        const response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            timeout: 10000
        });

        return res.status(200).json({
            success: true,
            data: response.data,
            status: response.status
        });

    } catch (error) {
        return res.status(error.response?.status || 500).json({
            success: false,
            error: error.message
        });
    }
};