# Sismoproject

el desarrolo consta de 2 proyectos, sismologia_app el backend y sismofront para el front end

# Proyecto Backend en Ruby

Este es un proyecto backend desarrollado en Ruby. Proporciona una API para interactuar con datos de características sísmicas.

## Funcionalidades

- La API proporciona endpoints para obtener información sobre características sísmicas.
- Los usuarios pueden agregar comentarios a las características sísmicas.

## Requisitos

- Ruby
- Rails 
- Base de datos PostgreSQL

## Instalación

1. Clona el repositorio a tu máquina local.
2. Instala las dependencias ejecutando `bundle install`.
3. Configura la base de datos en `config/database.yml`.
4. Ejecuta las migraciones de la base de datos con `rails db:migrate`.
5. Inicia el servidor con `rails server`.

## Uso

Una vez que el servidor esté en funcionamiento, puedes interactuar con la API utilizando herramientas como cURL o Postman.

Ejemplo de endpoints:
- Obtener todas las características: `GET /api/features` tambien acepata los parametros mag_type y per_page
- Agregar un comentario a una característica: `POST /api/features/:id/comments`
  
# Proyecto Frontend en React

Este es un proyecto frontend desarrollado en React para interactuar con el backend de un sistema de seguimiento de características sísmicas.

## Descripción

Este proyecto proporciona una interfaz de usuario para ver características sísmicas y agregar comentarios a las mismas. Utiliza React para la interfaz de usuario y consume datos del backend a través de una API REST.

## Requisitos

- Node.js 
- npm
- Que se este ejecutando el backend previamente

## Instalación

1. Clona el repositorio sismofront a tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Configura la URL del backend en el archivo de configuración si es necesario.

## Uso

Una vez que las dependencias estén instaladas, puedes iniciar la aplicación ejecutando `npm start` o `yarn start`. Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador por defecto.

La aplicación te permitirá ver características sísmicas y agregar comentarios a las mismas. Utiliza el link View Details para ver la info del url y el link comment para agregar un comentario al feature

## Licencia

Este proyecto está bajo la Licencia MIT.
