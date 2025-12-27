const isProd = process.env.NODE_ENV === 'production';

export const getBasePath = (path) => {
    const basePath = isProd ? '/lilys-bakehouse' : '';
    if (path.startsWith('/')) {
        return `${basePath}${path}`;
    }
    return `${basePath}/${path}`;
};
