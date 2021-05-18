import knex, { Knex } from 'knex';
import knexConfig from './knexfile';


const db = knex(knexConfig as Knex.Config);

export default db;

