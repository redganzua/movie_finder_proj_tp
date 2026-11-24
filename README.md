# TripleTen

Proyecto final frontedn. Un buscador de películas utilizando `The Movie DB` para mostrar todas las tarjetas con toda la información relevante de las películas que el usuario haya buscado. Una sección independiente que muestra películas en tendencia.

Se utilizó una variable de entorno en un archivo que ignora git _'.env.local'_ para hacer uso de la API key que nos brinda `The Movie DB`, con esto podemos tener acceso a la base de datos y solicitar información cuando el usuario busque una película.

La aplicación fue desplegada en `Netlify.com`: `https://movie-finder-proj-tp.netlify.app/`

Si se requiere correr localmente, es necesario crear una cuenta de usuario en `The Movie DB (TMDB)`:

Ir a `https://www.themoviedb.org/` y registrar un correo electrónico y contraseña.
Dar click en "Más" (o "More") encontrar la opción que dice "Documentación de ka API"
Finalmente crear un token de lectura y pegar dicho token en un documento .env que esté referenciado en App.jsx para que se desplieguen las Movie Cards.