<?php
    $destino = "contactovaquerizo.pablo@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $total = "Nombre: ".$nombre."\nCorreo: ".$correo. "\nTelefono: ".$telefono. "\nMensaje: ".$mensaje;
    mail($destino,"Contacto",$total);
    header("Location:../gracias.html");  
?>