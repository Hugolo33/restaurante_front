### RUTAS

### Menus
GET api/menu
Trae todos los menús. 
Necesita token del admin en la cabecera de autorización

GET api/menu/:menuId
Trae un menú por Id. 

POST api/menu
Crea un nuevo menú
Necesita token del admin en la cabecera de autorización

### Reservations
GET api/reservations
Trae todas las reservas
Necesita token del admin en la cabecera de autorización

GET api/reservations/:userId
Trae las reservas de un usuario en concreto. 
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