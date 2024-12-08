API de Productos
Este es un servidor basado en Express.js y MongoDB que permite gestionar productos. La API ofrece varias funcionalidades para manejar productos en una base de datos de MongoDB utilizando Mongoose.

Endpoints
1. GET /
Obtiene todos los productos de la base de datos.

Respuesta exitosa (200): Devuelve un arreglo con todos los productos.
Respuesta de error (500): Si ocurre un error al obtener los productos, devuelve un mensaje de error genérico.

2. GET /search
Busca productos en la base de datos según un parámetro de búsqueda proporcionado en la consulta (query). El parámetro puede ser una cadena que coincida con los campos isbn, name, gender o author.

Parámetro de consulta: query (requerido)
Ejemplo: /search?query=Producto
Respuesta exitosa (200): Devuelve los productos que coincidan con el término de búsqueda.
Respuesta de error (400): Si no se proporciona el parámetro de búsqueda.
Respuesta de error (404): Si no se encuentran productos que coincidan con la búsqueda.
Respuesta de error (500): Si ocurre un error durante la búsqueda.

3. GET /type
Filtra productos por su género (campo gender).

Parámetro de consulta: query (requerido)
Ejemplo: /type?query=Genero A
Respuesta exitosa (200): Devuelve los productos cuyo gender coincide con la consulta.
Respuesta de error (400): Si no se proporciona el parámetro de búsqueda.
Respuesta de error (500): Si ocurre un error durante la búsqueda.

4. GET /:productId
Obtiene un solo producto utilizando su ID único (productId).

Parámetro: productId (requerido) - El ID del producto a obtener.

Respuesta exitosa (200): Devuelve el producto con el ID proporcionado.

Respuesta de error (500): Si ocurre un error al obtener el producto.

5. POST /create
Crea un nuevo producto en la base de datos.

Cuerpo de la solicitud: Los datos del producto a crear. El cuerpo debe contener las siguientes propiedades:

isbn: (string) El ISBN del producto.
name: (string) El nombre del producto.
author: (string) El autor del producto.
gender: (string) El género del producto.
Respuesta exitosa (201): Devuelve el nuevo producto creado.

Respuesta de error (500): Si ocurre un error al crear el producto.

6. DELETE /delete/:id
Elimina un producto de la base de datos mediante su ID único.

Parámetro: id (requerido) - El ID del producto a eliminar.

Respuesta exitosa (200): Devuelve un mensaje de éxito y los detalles del producto eliminado.

Respuesta de error (400): Si el ID no es válido.

Respuesta de error (404): Si no se encuentra el producto con el ID proporcionado.

Respuesta de error (500): Si ocurre un error al eliminar el producto.