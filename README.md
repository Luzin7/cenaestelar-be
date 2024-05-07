# Documentação da API

Esta API oferece endpoints para gerenciar filmes.

## Rotas

| Método | Rota                    | Descrição                                                  |
| ------ | ----------------------- | ---------------------------------------------------------- |
| GET    | /movies                 | Retorna uma lista de todos os filmes cadastrados.           |
| GET    | /movies?title={title}  | Retorna filmes com títulos que correspondem ao parâmetro de consulta. |
| GET    | /movies/:id             | Retorna o filme correspondente ao ID fornecido.            |
| GET    | /movies/top             | Retorna uma lista dos melhores filmes classificados.       |
| POST   | /movies                 | Adiciona um novo filme com base nos dados fornecidos.     |
| PUT    | /movies/:id             | Atualiza os detalhes de um filme existente com base no ID fornecido. |
| DELETE | /movies/:id             | Exclui um filme com base no ID fornecido.                  |

## Controladores

### CreateMovie

Responsável por criar um novo filme.

#### Corpo da Requisição

| Campo            | Tipo            | Descrição                                                  |
| ---------------- | --------------- | ---------------------------------------------------------- |
| banner           | string          | URL do banner do filme.                                    |
| cast             | string[]        | Array dos membros do elenco.                               |
| description      | string          | Descrição detalhada do filme.                              |
| directors        | string[]        | Array dos diretores do filme.                              |
| genres           | string[]        | Array dos gêneros do filme.                               |
| media            | string / boolean| URL da mídia (trailer do Youtube ou outros) em que o filme está disponível. |
| poster           | string          | URL do pôster do filme.                                    |
| rating           | string          | Avaliação do filme (0-10 que será convertido para 0-5).    |
| releaseDate      | string          | Data de lançamento do filme.                               |
| shortDescription | string          | Resumo breve ou tagline do filme.                          |
| title            | string          | Título do filme.                                           |
| globalRating     | string          | Pontuação de classificação global do filme.                |

#### Resposta de Sucesso

Status: 201 Created

#### Resposta de Erro

Status: 400 Bad Request

### DeleteMovieById

Responsável por excluir um filme pelo ID.

#### Parâmetros da Requisição

| Campo | Tipo   | Descrição                           |
| ----- | ------ | ----------------------------------- |
| id    | string | ID do filme a ser excluído.         |

#### Resposta de Sucesso

Status: 204 No Content

#### Resposta de Erro

Status: 400 Bad Request

### FindAllMovies

Responsável por recuperar todos os filmes.

#### Resposta de Sucesso

Status: 200 OK

| Campo  | Tipo    | Descrição                       |
| ------ | ------- | ------------------------------- |
| movies | Movie[] | Array contendo todos os filmes. |

#### Resposta de Erro

Status: 400 Bad Request

### FindBestMoviesSeen

Responsável por recuperar os melhores filmes vistos.

#### Resposta de Sucesso

Status: 200 OK

| Campo  | Tipo    | Descrição                               |
| ------ | ------- | --------------------------------------- |
| movies | Movie[] | Array contendo os melhores filmes vistos. |

#### Resposta de Erro

Status: 400 Bad Request

### FindMovieById

Responsável por recuperar um filme pelo ID.

#### Parâmetros da Requisição

| Campo | Tipo   | Descrição                           |
| ----- | ------ | ----------------------------------- |
| id    | string | ID do filme a ser recuperado.       |

#### Resposta de Sucesso

Status: 200 OK

| Campo | Tipo | Descrição                      |
| ----- | ---- | ------------------------------ |
| movie | Movie| Filme recuperado pelo ID.     |

#### Resposta de Erro

Status: 400 Bad Request

### FindMovieByTitle

Responsável por recuperar filmes pelo título.

#### Parâmetros da Requisição

| Campo | Tipo   | Descrição                             |
| ----- | ------ | ------------------------------------- |
| title | string | Título do filme a ser recuperado.     |

#### Resposta de Sucesso

Status: 200 OK

| Campo  | Tipo    | Descrição                               |
| ------ | ------- | --------------------------------------- |
| movies | Movie[] | Array contendo filmes com o título fornecido. |

#### Resposta de Erro

Status: 400 Bad Request

### FindMoviesByRating

Responsável por recuperar filmes pela avaliação.

#### Corpo da Requisição

| Campo  | Tipo   | Descrição                             |
| ------ | ------ | ------------------------------------- |
| rating | string | Avaliação dos filmes a serem recuperados. |

#### Resposta de Sucesso

Status: 200 OK

| Campo  | Tipo    | Descrição                               |
| ------ | ------- | --------------------------------------- |
| movies | Movie[] | Array contendo filmes com a avaliação fornecida. |

#### Resposta de Erro

Status: 400 Bad Request

### UpdateMovie

Responsável por atualizar um filme pelo ID.

#### Parâmetros da Requisição

| Campo | Tipo   | Descrição                               |
| ----- | ------ | --------------------------------------- |
| id    | string | ID do filme a ser atualizado.           |

#### Corpo da Requisição

| Campo            | Tipo   | Descrição                               |
| ---------------- | ------ | --------------------------------------- |
| banner           | string | URL do banner do filme.                 |
| cast             | string[]| Array dos membros do elenco.            |
| description      | string | Descrição detalhada do filme.           |
| directors        | string[]| Array dos diretores do filme.           |
| genres           | string[]| Array dos gêneros do filme.             |
| media            | string | URL da mídia (trailer do Youtube ou outros) em que o filme está disponível. |
| poster           | string | URL do pôster do filme.                 |
| rating           | string | Avaliação do filme (0-10 que será convertido para 0-5). |
| releaseDate      | string | Data de lançamento do filme.            |
| shortDescription | string | Resumo breve ou tagline do filme.       |
| title            | string | Título do filme.                        |
| globalRating     | string | Pontuação de classificação global do filme. |

#### Resposta de Sucesso

Status: 204 No Content

#### Resposta de Erro

Status: 400 Bad Request



