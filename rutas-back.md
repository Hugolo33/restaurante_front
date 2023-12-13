### RUTAS

### Menus
GET api/menu
Trae todos los menús. 
Necesita token del admin en la cabecera de autorización

GET api/latest
Trae el menú más reciente de la base de datos.

GET api/menu/:menuId
Trae un menú por Id. 

POST api/menu
Crea un nuevo menú
Necesita token del admin en la cabecera de autorización

### Reservations
GET api/reservations
Trae todas las reservas
Necesita token del admin en la cabecera de autorización

GET api/reservations/byshifts
Trae todas las reservas ordenadas por turno.
Necesita token del admin en la cabecera de autorización

GET api/reservations/before
Trae todas las reservas hasta hoy
Necesita token del admin en la cabecera de autorización

GET api/reservations/after
Trae todas las reservas a partir de hoy
Necesita token del admin en la cabecera de autorización

GET api/reservations/user/:userId
Trae las reservas de un usuario en concreto. 
Necesita token en la cabecera de autorización

GET api/reservations/before/:userId
Trae las reservas de un usuario en concreto antes de hoy.
Necesita token en la cabecera de autorización

GET api/reservations/after/:userId
Trae las reservas de un usuario en concreto después de hoy. 
Necesita token en la cabecera de autorización

GET api/reservations/:reservationId
Trae una reserva en concreto por id
Necesita token en la cabecera de autorización

POST api/reservations
Crea una nueva reserva
Necesita token del admin en la cabecera de autorización

PUT api/reservations/:reservationId
Actualiza la información de una reserva. Incluye el id del usuario logado al actualizarla. Así sabemos que no está disponible.
Necesita token en la cabecera de autorización

DELETE api/reservations/:reservationId
Borra una reserva. 
Necesita token en la cabecera de autorización

### Reviews
GET api/reviews
Trae todos los reviews. 

POST api/reviews
Permite a un usuario publicar una reserva. 
Necesita token en la cabecera de autorización

DELETE api/reviews/:reviewId
Permite al admin borrar la reserva
Necesita token del admin en la cabecera de autorización


### Shifts
GET api/shifts
Trae todos los shifts 
Necesita token del admin en la cabecera de autorización

POST api/shifts
Crear un shift nuevo
Necesita token del admin en la cabecera de autorización

PUT api/shifts/:shiftId
Actualizar un shift
Necesita token del admin en la cabecera de autorización

DELETE api/shifts/:shiftId
Borrar un shift
Necesita token del admin en la cabecera de autorización

### Users
POST api/users/register
Registra un nuevo usuario

POST api/users/login
Loga un nuevo usuario y proporciona un token

PUT api/users/:userId
Actualiza la información un usuario
Necesita token en la cabecera de autorización

DELETE api/users/:userId
Borra un usuario
Necesita token en la cabecera de autorización