import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';


import uuid from './libs/uuid.js';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: { //limites
    http_req_duration: ['p(95)<2000'], //95% das requisicoes deve responder em menos de 2segs.
    http_req_failed: ['rate<0.01']    // 1% das requisicoes podem ocorrer erro
  }
}

export default function () {
  const url = 'http://localhost:3333/signup'

  const payload = JSON.stringify(
    { email: `${uuid.v4().substring(24)}@qa.qacademy.com.br`, 'password': 'pwd123' }
  )

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  const res = http.post(url, payload, headers);

//  console.log(res.body)

  check(res, {
    'status should be 201': (r) => r.status === 201
  })

  sleep(1);
}

export function handleSummary(data) {
  return {
    "./report/signup.html": htmlReport(data), // Gera o relatório em HTML
  };
}

// https://www.youtube.com/watch?v=2rN3DdiCn6o&list=PLn2i8I7W73irNVpzHDU2oKWCKLa2VPWEx&index=17
