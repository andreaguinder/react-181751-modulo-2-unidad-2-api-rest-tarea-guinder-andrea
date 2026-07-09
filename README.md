# Consumo de API REST de Usuarios y renderizado

## Descripción del Proyecto

Esta aplicación es un buscador dinámico de usuarios desarrollado con React y Vite. La aplicación consume una API pública para obtener un listado de perfiles y permite visualizar la información a través de tarjetas personalizadas, además de ofrecer una búsqueda inteligente que filtra los resultados por nombre y nombre de usuario en tiempo real.

Este proyecto fue desarrollado para practicar la integración de servicios externos y el flujo de datos entre componentes en React, implementando:

* Consumo de APIs: Uso de fetch con async/await dentro de useEffect para la obtención de datos.

* Gestión de Estado: Implementación de estados para manejar el ciclo de vida de la petición (loading, error, data).

* Elevación de Estado (Lifting State Up): Centralización de la lógica de búsqueda en el componente padre (App) para sincronizar el buscador con la lista.

* Componentización: Arquitectura modular dividiendo la responsabilidad entre Usuarios, UsuarioCard y Search.

---

## Funcionalidades Implementadas

* Renderizado Condicional: La interfaz responde de manera fluida mostrando estados de carga, manejo de errores en caso de fallo, o la lista de usuarios.

* Búsqueda en Tiempo Real: Filtrado de usuarios por name y username de manera simultánea mientras el usuario escribe.

* Componentes Reutilizables: La presentación visual se maneja mediante UsuarioCard, facilitando la escalabilidad y el mantenimiento de los estilos.

---

## Estructura de Archivos Principal

La aplicación está organizada para favorecer la limpieza y la separación de responsabilidades:

* src/components/: 

    * Search/: Componente de entrada para la búsqueda.
    * Usuarios/: Contenedor principal que gestiona el fetch y el filtrado.
    * UsuarioCard/: Componente visual para cada usuario.

* src/styles/: Estilos modulares (.module.scss) aplicados a cada componente para un diseño encapsulado.

---

## Instrucciones para Ejecutar el Proyecto Localmente

Para clonar, instalar las dependencias y ejecutar este proyecto en tu entorno local, seguí estos pasos desde tu terminal:

1. **Clonar el repositorio:**
   ```bash
   git clone <https://github.com/andreaguinder/react-181751-modulo-2-unidad-2-api-rest-tarea-guinder-andrea.git>

2. **Ingresar a la carpeta del proyecto**
Luego moverse del directorio que se creó con el nombre del proyecto:
    ```bash
    cd react-181751-modulo-2-unidad-2-api-rest-tarea-guinder-andrea

3. **Instalar las dependencias**
Instalar todos los paquetes necesarios especificados en el package.json (incluyendo React y las herramientas de desarrollo como SASS):
    ```bash
    npm install

4. **Ejecutar el servidor de desarrollo**
Iniciar el entorno de desarrollo local para ver la aplicación en el navegador:
    ```bash
    npm run dev

5. Abrir en el navegador
Una vez que la terminal te indique que el servidor está corriendo, abre tu navegador e ingresa la dirección que te figure ejemplo:

http://localhost:5173

---

##  Capturas de pantalla

En /src/proyecto adjunto capturas de pantalla de mobile y desktop de como se visualiza el proyecto en el navegador y también el pdf de la tarea.

---

##  Créditos del Autor

Estudiante: Andrea Guinder

Curso: React (Comisión 181751)

Módulo: 2 - Unidad 2: API REST - Tarea

Institución: Universidad Tecnológica Nacional

---

##  Fuentes y Referencias

* Material de Clase: Material teórico y práctico proporcionado por la Universidad Tecnológica Nacional (UTN).

* Asistencia de IA: Soporte técnico y resolución de dudas mediante Gemini.
