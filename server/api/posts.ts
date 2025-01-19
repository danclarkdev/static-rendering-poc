import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    return [
        {
            id: 'aaaaa',
            title: 'A Post',
        },
        {
            id: 'bbbbb',
            title: 'B Post',
        },
        {
            id: 'ccccc',
            title: 'C Post',
        },
    ];
});
