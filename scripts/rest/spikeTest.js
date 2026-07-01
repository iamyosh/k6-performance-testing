import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        {duration: '10s', target: 10},
        {duration: '10s', target: 300},
        {duration: '30s', target: 300},
        {duration: '10s', target: 10},    
    ],
}

export default function(){
    const res = http.get('https://test.k6.io');

    check(res,{
        'status is 200 ok': (r)=> r.status === 200,
    });
    sleep(1);
}