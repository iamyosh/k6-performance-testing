import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options = {
    vus: 150,
    duration: '30s',
}

export default function(){
    const res = http.get('https://test.k6.io');

    check(res,{
        'status is 200 ok': (r)=> r.status === 200,
        'response time is less than 500ms': (r)=> r.timings.duration < 500,
    });
    sleep(2);
}