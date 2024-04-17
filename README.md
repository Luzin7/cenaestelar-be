# Cena estelar API

Ainda to bolando a desc

## Documentação da API

### Retorna todos os itens

```http
  GET /movies
```

```http
  GET /series
```

### Procurar conteúdos por título

```http
  GET /{contentType}?query={contentTitle}

  ex: /movies?query=oppenheimer
```

| Método  | Tipo     | Descrição                                                          |
| :------ | :------- | :----------------------------------------------------------------- |
| `Query` | `string` | **Obrigatório**. O título do conteúdo que o usuário quer encontrar |

### Filtrar conteúdo por gênero

```http
  GET /{contentType}?filter=genres

  ex: /movies?filter=genres
```

conteúdo do corpo:

```json
ex:
{
  "genres": ["ryan", "gosling"],
}
```

| Método | Tipo   | Descrição                                              |
| :----- | :----- | :----------------------------------------------------- |
| `Body` | `JSON` | **Obrigatório**. O gereno do conteúdo a ser procurado. |

### Filtrar conteúdo por data de lançamento

```http
  GET /{contentType}?filter=release

  ex: /movies?filter=release
```

conteúdo do corpo:

```json
ex:
{
  "release": "2222",
}
```

| Método | Tipo   | Descrição                                              |
| :----- | :----- | :----------------------------------------------------- |
| `Body` | `JSON` | **Obrigatório**. O gereno do conteúdo a ser procurado. |

### Filtrar conteúdos por ID

```http
  GET /{contentType}/id

  ex: /movies/ewUbr40sddWoKps2
```

| Método   | Tipo     | Descrição                                                      |
| :------- | :------- | :------------------------------------------------------------- |
| `Params` | `string` | **Obrigatório**. O ID do conteúdo que o usuário quer encontrar |

### Adicionar um novo conteúdo

```http
  POST /movies

  ex: /movies
```

conteúdo do corpo:

```json
ex:
{
  "title": "Filme Show",
  "poster": "https://images.alphacoders.com/808/808916.jpg",
  "media": "https://images.alphacoders.com/808/808916.jpg",
  "banner": "https://images.alphacoders.com/808/808916.jpg",
  "rating": "4.5",
  "shortDescription": "Tagline show do filme.",
  "description": "Crítica do filme que claramente vai fazer toda a diferença na vida de quem acessar o site.",
  "releaseDate": "01-01-0001",
  "genres": ["ryan gosling"],
  "cast": [
    "ryan gosling",
    "literalmente eu"
  ],
  "directors": [
    "ryan gosling",
    "literalmente eu"
  ]
}
```

| Método | Tipo   | Descrição                                                                   |
| :----- | :----- | :-------------------------------------------------------------------------- |
| `Body` | `JSON` | **Obrigatório**. O conteúdo do filme para ser adicionado ao banco de dados. |

### Deletar conteúdo por ID

```http
  DELETE /{contentType}/id

  ex: /movies/ewUbr40sWoKps221
```

| Método   | Tipo     | Descrição                                           |
| :------- | :------- | :-------------------------------------------------- |
| `Params` | `string` | **Obrigatório**. O ID do conteúdo que será deletado |
