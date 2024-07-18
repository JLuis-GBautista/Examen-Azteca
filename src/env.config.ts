interface ENV {
  [name: string]: string;
  PORT: string;
  ENVIROMENT: string;
  URL_MONGO_ATLAS: string;
}

const ENV = process.env as ENV;

export default ENV;
