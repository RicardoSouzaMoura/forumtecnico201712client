const PROXY_CONFIG = [
    {
        "context": ["/api/**"],
        "target": "http://localhost:3000",
        "secure" : false
        
    },
    {
        "context": ["/smp/**"],
        "target": "https://wdsmph.petrobras.com.br:9081",
        "secure" : true,
        "pathRewrite": {
            "^/smp/push": "/restnotification"
        },
        "changeOrigin" : true
        
    }
];

module.exports = PROXY_CONFIG;