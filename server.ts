
// import { createServer } from 'node:http';
// import {
//   CopilotRuntime,
//   OpenAIAdapter,
//   copilotRuntimeNodeHttpEndpoint,
// } from '@copilotkit/runtime';
// import OpenAI from 'openai';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// const serviceAdapter = new OpenAIAdapter({ openai });

// const HEADERS = {
//   'Access-Control-Allow-Origin': 'http://localhost:3000',
//   'Access-Control-Allow-Methods': 'POST, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }
 
// const server = createServer((request, response) => {
//   const headers = {
//     ...HEADERS,
//     ...(request.method === 'POST' && { 'Content-Type': 'application/json' }),
//   }
//   response.writeHead(200, headers)

//   if (request.method === 'POST') {
//     const runtime = new CopilotRuntime();
//     const handler = copilotRuntimeNodeHttpEndpoint({
//       endpoint: '/copilotkit',
//       runtime,
//       serviceAdapter,
//     });
   
//     return handler(request, response);
//     } else {
//       response.end('openai server')
//     }
// });
 
// server.listen(4000, () => {
//   console.log('Listening at http://localhost:4000/copilotkit');
// });

import { createServer } from 'node:http';
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from '@copilotkit/runtime';
import OpenAI from 'openai';
 
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const serviceAdapter = new OpenAIAdapter({ openai });
 
const server = createServer((req, res) => {
  const runtime = new CopilotRuntime();
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: '/copilotkit',
    runtime,
    serviceAdapter,
  });
 
  return handler(req, res);
});
 
server.listen(3001, () => {
  console.log('Listening at http://localhost:4000/copilotkit');
});