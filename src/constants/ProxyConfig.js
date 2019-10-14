export const DevProxy = {
    // host: "http://localhost",
    host: "https://api.memokit.me",
    systems: [
        {
            pathUrl: '/api/auth',
            // port: '3002'
        },
        {
            pathUrl: '/api/content',
            // port: '3001'
        }
    ]
};

export const ProdProxy = {
    host: "https://api.memokit.me",
    systems: [
        {
            pathUrl: '/api/auth',
            port: '3002'
        },
        {
            pathUrl: '/api/content',
            port: '3001'
        }
    ]
};