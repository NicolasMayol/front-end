 Hola soy Nicol�s Mayol, muchas gracias por tomarse el tiempo de leer esto.

Este texto tiene como fin ser una r�pida guia sobre la p�gina.

Para que nuestras p�ginas funcionen de manera individual o de forma simult�nea debemos por medio de la terminal CMD o terminal de nuestro editor de codigo (ambas en caso de querer usarlas a la vez).
 #1 posicionarnos sobre nuestra carpeta.
 #2 introducir:
	npm run react (en caso de que sea nuestra aplicaci�n en react (localhost:3000)).
	npm run express (en caso de que sea nuestra API la que deseamos ver (localhost:4000)).

Como fue pedido, la misma es navegable desde el buscador propio como de manera independiente con su propio url.
	
	Partiendo siempre desde nuestro http://localhost:3000.
	Caja de b�squeda: "/";.
	Resultado de la b�squeda: "/items$search=:busqueda" *:busqueda debe ser reemplazado por el nombre del producto que desea buscar*.
	Detalle del producto: "/items/:id" *:id debe ser reemplazado por el id de un producto real de mercado libre*.

Tambi�n podemos ver puede visitar los siguientes endpoints.

	Partiendo siempre desde nuestro http://localhost:4000
	Esta direcci�n devuelve por pantalla los primeros 4 productos de la b�squeda realizada /api/items?q= :query *:query debe ser reemplazado por el nombre del producto que desea buscar*.
	Esta direcci�n devuelve por pantalla el detalle y descripci�n del producto indicado /api/items/?id=  :id *:id debe ser reemplazado por el id de un producto real de mercado libre*.

Nuestra aplicaci�n de React tambi�n nos muestra por consola los productos en formato JSON cuando estamos en nuestra vista de "Resultado de la b�squeda".

Nuevamente muchas gracias por su tiempo y atenci�n.
Saludos!.