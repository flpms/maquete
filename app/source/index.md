---
title: API Reference

language_tabs:
  - javascript
  - bash
  - ruby
  - python

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/mpociot/whiteboard'>Documentation Powered by Whiteboard</a>

includes:
  - errors

search: true
---

# Bem-vindo ao Mail by Local 1202

Queremos facilitar o envio de e-mails da sua aplicação e com isso te ajudar no disparo de e-mails usando uma interface Rest. São 4 etapas simples, criação de conta, configurações do envio, adição de template e envio.

Se deseja pode usar o endpoint para monitorar alguns detalhes.

# Criar da conta

Para criar a conta basta enviar um post ou usar 

### POST /user
`POST http://mailapi.local1202.com/v1/user`

```javascript
fetch('https://mailapi.local1202.com/v1/', {
  method: 'post',
  body: JSON.stringify({
    email: 'string',
    password: 'string'
  })
});
```

<p class="component-schema">
  <span class="schema">
    {
      "request": "http://localhost:3000/v1/create-user",
      "headers": {
        "method": "POST"
      },
      "data": {
        "email": { "type": "string" },
        "password": { "type": "string" },
        "address": {
          "type": "object",
          "properties": {
            "street":{ "type": "string" },
            "number":{ "type": "number" }
          }
        }
      }
    }
  </span>
  <span class="component"></span>
</p>

# Configuração

# Adicionar template

# Enviar Email

# Analytics

## Consultar templates

### GET templates

`GET http://mailapi.local1202.com/v1/templates`

```js
/* Request */

const req = await fetch('https://mailapi.local1202.com/v1/templates');
const result = await req.json();
```

<p class="component-schema">
  <span class="schema">
    {
      "request": "http://localhost:3000/v1/templates",
      "headers": {
        "method": "GET"
      }
    }
  </span>
  <span class="component"></span>
</p>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```bash
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```bash
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">If you're not using an administrator API key, note that some kittens will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve
