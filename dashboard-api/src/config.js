import dotenv from 'dotenv'

dotenv.config()

export const config = {
  dbName: process.env.DB_NAME,
  dbUrl: process.env.DB_URL,
  port: process.env.PORT
}
