const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
/**
 * Rota/ Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca/Listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Parms: parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Parms: parametros utilizados para identificar recursos 
   * Request Body: Compo da requisição, utilizado para criar ou alterar recursos.
   */

   /**
    * SQL: MySQL, SQlite, PostgreSQL, Oracle. Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Bulder: table('user').select('*').whare()
     */

app.use(routes);

app.listen(3333);


