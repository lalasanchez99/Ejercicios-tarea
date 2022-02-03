let day = prompt('Por favor ingresa un día de la semana')
switch (day) {
    case 'lunes':
        alert('Hace parte de los días de lunes a viernes , tus actividades son sacar al perro, trabajar, almorzar, ver One Piece y dormir')
        break;
    case 'martes':
        alert('Hace parte de los días de lunes a viernes , tus actividades son sacar al perro, trabajar, ver One Piece, almorzar y dormir')
        break;
    case 'miercoles':
        alert('Hace parte de los días de lunes a viernes , tus actividades son sacar al perro, trabajar, estudiar ingles, ver One Piece, almorzar y dormir')
        break;
    case 'jueves':
        alert('Hace parte de los días de lunes a viernes , tus actividades son, trabajar, ver One Piece, almorzar y domir')
        break;
    case 'viernes':
        alert('Hace parte de los días de lunes a viernes , tus actividades son , trabajar, ver One Piece,almorzar y domir')
        break;
    case 'sabado':
        alert('Hace parte del fin de semana , tus actividades son sacar al perro, ir al taller de actuacion, ver One Piece, almorzar y dormir')
        break;
    case 'domingo':
        alert('Hace parte del fin de semana , tus actividades son sacar al perro, ir a clase de modelaje,  ver One Piece, almorzar y dormir')
        break;
    default:
        alert('ingrese dia valido')
        break;
}