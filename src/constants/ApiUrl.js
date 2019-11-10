const host = 'https://api.memokit.me';
export const externalApi = {
    refreshToken: `${host}/api/auth/refresh-token`,
    accessToken: `${host}/api/auth/access-token`,
    getAllContent: `${host}/api/content/get-all`,
    getFile: `${host}/api/document/file/read`
};

export const internalApi = {
    refreshToken: '/api/auth/refresh-token',
    accessToken: '/api/auth/access-token',
    getAllContent: `/api/content`,
    getFile: `/api/document/file`
};