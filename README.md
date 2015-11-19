# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> Standard Banner <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla genérica con todo lo necesario para crear formatos Standard( menos de 200Kb y una sola interacción de click ) utilizando workspaces de Sizmek.

## Descripción

La plantilla para montar una careta consta de tres ficheros html, uno para la zona contraida y otro para cada uno de los paneles. El panel automático, por norma general, debe ser un panel de poco peso y no puede llevar vídeo. Este panel se cerrará de forma automática pasados unos segundos.

Esta plantilla tiene implementada la funcionalidad para lanzar el panel automático con frecuencia, y el panel de usuario en rollover para desktop o click para entornos táctiles. La funcionalidad de expansión con delay también esta implementada y puede ser fácilmente modificada.


## Configuración 

Para seleccionar el tamaño de la creatividad, modifica los valores del fichero *adConfig.js* que se encuentra en el directorio raíz de la plantilla.

```javascript
var adConfig = {
    "banner_width": "300",
    "banner_height": "250"
};
```

Una vez configurado esto ya puedes trabajar tu creatividad sobre la plantilla.

Cuando tengas terminada la creatividad, sube la pieza a la plataforma. En este caso, el formato que debes seleccionar en la plataforma es **HTML5 STANDARD BANNER**. ¿No tienes claro cómo? Puedes seguir esta pequeña guía [Subir Creatividades Sizmek](http://sizmek.es/wiki/doku.php?id=subir_creatividades_html5).

Cuando hayas hecho esto deberias tener algo como en este ejemplo:

![Standard Setup](https://cloud.githubusercontent.com/assets/15161388/11284195/c75c6598-8f08-11e5-95fc-556b9431fe88.png)

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

***
