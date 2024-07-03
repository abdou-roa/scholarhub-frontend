// utils/fetcher.js
const Token = "Token 993d1875ae14b23eaab542f425a64cab35bea196"
export const fetcher = (url:string) => fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${Token}`, // Use your env variable here
    },
}).then(res => {
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
});
