# Cena estelar API

Ainda to bolando a desc

## Documentação da API

#### Retorna todos os itens

```http
  GET /movies
```

```http
  GET /series
```

#### Procurar conteúdos por título

```http
  GET /{contentType}?query={contentTitle}

  ex: /movies?query=oppenheimer
```

| Método  | Tipo     | Descrição                                                          |
| :------ | :------- | :----------------------------------------------------------------- |
| `Query` | `string` | **Obrigatório**. O título do conteúdo que o usuário quer encontrar |

#### Filtrar conteúdos por detalhes

```http
  GET /{contentType}?filter={filterType}

  ex: /movies?filter=cast
```

conteúdo:

```json
ex:
{
    "filter":  "Ryan Gosling"
}
```

possíveis métodos de filtro:
rating, genre, director, releaseDate.

| Método  | Tipo     | Descrição                                                                 |
| :------ | :------- | :------------------------------------------------------------------------ |
| `Query` | `string` | **Obrigatório**. O tipo de fitro do conteúdo que o usuário quer encontrar |
| Método  | Tipo     | Descrição                                                                 |
| `Body`  | `string` | **Obrigatório**. O valor pelo qual os conteúdos serão filtrados           |
