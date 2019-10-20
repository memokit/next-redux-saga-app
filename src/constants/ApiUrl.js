const host = 'https://api.memokit.me';
export const externalApi = {
    refreshToken: `${host}/api/auth/refresh-token`,
    accessToken: `${host}/api/auth/access-token`,
    getAllContent: `${host}/api/content/get-all`
};

export const internalApi = {
    refreshToken: '/api/auth/refresh-token',
    accessToken: '/api/auth/access-token',
    getAllContent: `/api/content`
};