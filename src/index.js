// import express from 'express';
// const app = express();
// const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`This port is ${PORT}`);
// // });
// // app.use((req, res, next) => {
// //   console.log(`Time: ${new Date().toLocaleString()}`);
// //   next();
// // });
// // app.use(express.json());
// // app.use((err, req, res, next) => {
// //   res.status(500).json({
// //     message: 'Something went wrong',
// //   });
// //   next();
// // });
// // app.get('/', (req, res) => {
// //   res.json({
// //     message: 'Hello world',
// //     age: 32,
// //     a: {
// //       name: 'Panda',
// //       gender: 'male',
// //     },
// //   });
// // });
// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// // наприклад, у запитах POST або PATCH
// app.use(express.json());

// // Маршрут для обробки GET-запитів на '/'
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello, World!',
//   });
// });

// // Middleware для обробких помилок (приймає 4 аргументи)
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// ==========================================================middleware====================================================
// import express from 'express';
// import cors from 'cors';
// const PORT = 3001;
// const app = express();
// import pino from 'pino-http';
// app.use(cors());
// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(express.json());
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world',
//   });
// });
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'SOmething went wrong',
//     error: err.message,
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });
// app.listen(PORT, () => {
//   console.log(`Server is ${PORT}`);
// });

// ================================Middleware із бібліотек=================================
// import { startServer } from './server.js';

// startServer();

// ==================================Заняття 2=======================================
import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
const bootstrap = async () => {
  await initMongoDB();
  startServer();
};
bootstrap();
