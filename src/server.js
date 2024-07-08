// import express from 'express';
// import { getAllStudents, getStudentById } from './service/students.js';
// import pino from 'pino-http';
// import cors from 'cors';
// import { env } from './utils/env.js';
// // import { get } from 'mongoose';
// import studentsRouter from '../src/routers/students.js';
// const PORT = Number(env('PORT', '3000'));

// export const startServer = () => {
//   const app = express();

//   app.use(express.json());
//   app.use(cors());

//   app.use(
//     pino({
//       transport: {
//         target: 'pino-pretty',
//       },
//     }),
//   );

//   app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello world!',
//     });
//   });
//   app.use(studentsRouter);
//   app.use('*', (req, res, next) => {
//     res.status(404).json({
//       message: 'Not found',
//     });
//   });

//   app.use((err, req, res, next) => {
//     res.status(500).json({
//       message: 'Something went wrong',
//       error: err.message,
//     });
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// ===============================================Заняття 2======================================
// import express from 'express';
// const app = express();
// // app.use(express.json());
// app.use(
//   express.json({
//     type: ['application/json', 'application/vnd.api + json'],
//     limit: '100kb',
//   }),
// );

// const controller = (req, res) => {
//   const body = req.body;
//   console.log(body);
// };

import express from 'express';
// import { getAllStudents, getStudentById } from './service/students.js';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
// import { get } from 'mongoose';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });
  app.use(router);
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
