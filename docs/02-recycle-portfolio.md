# Reclicaje del Portfolio de la Unidad Anterior

En la unidad anterior de la asignatura se refactorizó un portfolio, cambiando tambien sus valores para fuera un portfolio propio.

| ![Hobbies](./images/02-doc/hobbies_before.jpeg) | ![Repo](./images/02-doc/repo_before.jpeg) |
| ----------------------------------------------- | ----------------------------------------- |
| Pantalla de inicio                              | Despliegue de drawer                      |

A continuación, explicaré como he reclijado dicho repositorio paso a paso para incluirlo en esta práctica con navegación

## Pantalla de Hobbies (About Me)

En el proyecto anterior, el código fue separado en diversos componentes para una correcta refactorización. Así, en mi anterior proyecto, contaba ya con diversas carpetas:

- `data`: que incluye la información mostrada en pantalla, como mis hobbies en este caso.

- `types`: para el tipado de clases como, por ejemplo, Card.

- `theme`: con los estilos globales de la aplicación.

- `components`: lo cual compondrán la pantalla visualizada, como Card (para la información breve mostrada en la parte superior) y List (para los hobbies).

Poco a poco, he añadido estos ficheros ya existentes en esta aplicación. La única diferencia es que ahora se manejará diferente la navegación entre esta pantalla y la siguiente.
