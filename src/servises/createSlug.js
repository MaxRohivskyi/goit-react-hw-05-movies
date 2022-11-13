import slugify from 'slugify';

export const createSlug = string => slugify(string, { lower: true });
