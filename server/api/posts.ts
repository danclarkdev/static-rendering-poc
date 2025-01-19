import { defineEventHandler } from 'h3';
import * as contentful from 'contentful';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const client = contentful.createClient({
        space: config.contentful.space,
        accessToken: config.contentful.cdaToken,
    });

    const entries = await client.getEntries({
        content_type: 'post',
    });

    return entries.items.map(entry => ({
        id: entry.sys.id,
        title: entry.fields.title,
    }))
});
