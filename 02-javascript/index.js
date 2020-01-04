'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
Lo que hace es ejecutar un servicio rest, ya sea, get, post, delete, put, etc.
- How it's used? Add different use-case examples that covers every functionality.
1.- La función obtiene por parámetro el method (verbo) get, post, put, delete
2.- La url base donde va acceder (ip o dominio + port + nombre sistema)
3.- El path corresponde al nombre del servicio que se va a acceder, corresponde a la ruta después de la ruta base
4.- headers = { Accept: '*/*' }, Permite el acceso cualquier tipo de medios (JSON, HTML, XML, etc)
5.- Luego de obtener obtine los datos respuesta json en la variable r
- How it is called this design pattern or technique?
Encadenamiento de promesas
HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch

function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => r.json());
}
