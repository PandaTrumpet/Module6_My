import path from 'node:path';
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const ROLES = {
  TEACHER: 'teacher',
  PARENT: 'parent',
};

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
  JWT_SECRET: ' JWT_SECRET',
  APP_DOMAIN: 'APP_DOMAIN',

  // SMTP_HOST: 'smtp-relay.brevo.com',
  // SMTP_PORT: 587,
  // SMTP_USER: '782781001@smtp-brevo.com',
  // SMTP_PASSWORD: 'IK305jPXmWnYLpDz',
  // SMTP_FROM: 'dsavontrumpet@gmail.com',
};

//
//
//
//
//
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
