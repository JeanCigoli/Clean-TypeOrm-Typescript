import { createConnection } from 'typeorm';

export const connection = async () => {
  try {
    const connection = await createConnection();

    console.log(`Connected Created`);

    return connection;
  } catch (error) {
    console.log('Connection Error')
  }
}