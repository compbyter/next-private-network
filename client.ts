import { strapi } from '@strapi/client';

export const client = strapi({ baseURL: process.env['STRAPI_URL'] || '' });
