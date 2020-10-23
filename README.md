# Código boilerplate del ejercicio de evaluación del sprint 3 del curso front-end de Adalab

## Instalación

Instala las dependencias locales ejecutando en la terminal el comando:

```npm install```

Pasos para arrancar el proyecto:
Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```npm run dev```

Este comando:

* Arranca el servidor con la api mockeada api/reasons

* Abre una ventana de Chrome y muestra tu página web, al igual que hace el plugin de VS Code Live Server (Go live).

* También observa todos los ficheros que hay dentro de la carpeta src/, para que cada vez que modifiques un fichero refresca tu página en Chrome.
* También procesa los ficheros HTML, SASS / CSS y JS y los genera y guarda en la carpeta public/. Por ejemplo:

Convierte los ficheros SASS en CSS.

Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar npm start ya puedes empezar a editar todos los ficheros que están dentro de la carpeta src/ y programar cómodamente.

## Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```npm run docs```

Y a continuación:

* Sube a tu repo la carpeta docs/ que se te acaba de generar.

* Entra en la pestaña settings de tu repo.

* Y en el apartado de GitHub Pages activa la opción master branch /docs folder.

* Y ya estaría!!!

Además, los comandos:

```npm run push-docs```

o

```npm run deploy```

son un atajo que nos genera la versión de producción y hace push de la carpeta docs/ del tirón.