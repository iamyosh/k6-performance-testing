import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        {duration: '20s', target: 50},
        {duration: '20s', target: 100},
        {duration: '20s', target: 150},
        {duration: '20s', target: 200},
        {duration: '20s', target: 0},
    ],
}

export default function(){
    const res = http.get('https://test.k6.io');
    check(res, {
        'status is 200': (r)=> r.status === 200,
        'response time is below 1000ms': (r)=> r.timings.duration< 1000,
    });
}