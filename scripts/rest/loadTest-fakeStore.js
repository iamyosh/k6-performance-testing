import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options = {
    vus:100,
    duration: '30s',
}

export default function(){
    const res = http.get('https://fakestoreapi.com/products');

    check(res, {
        'status is 200 ok': (r)=> r.status === 200,
        'response time is less than 300ms': (r)=> r.timings.duration< 300,
        'response is an array': (r)=> Array.isArray(JSON.parse(r.body)), //check if the response is an array
    })
}

// Step 1 — r.body gets the raw response text
// Step 2 — JSON.parse() converts it into real JavaScript data
// Step 3 — Array.isArray() checks if that data is an array