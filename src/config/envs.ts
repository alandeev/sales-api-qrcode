const ENVS = {
  USER_SECRET_KEY: process.env.USER_SECRET_KEY,
  CLIENT_SECRET_KEY: process.env.CLIENT_SECRET_KEY,
  SERVER_PORT: process.env.SERVER_PORT,
}

export default (ENVS as Required<Partial<typeof ENVS>>)
