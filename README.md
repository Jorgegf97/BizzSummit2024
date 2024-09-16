Instalar Node.js para poder tener los Node Package Manager disponibles (npm)
Crear un Proyecto de TypeScript en una carpeta donde queramos localizar nuestros archivos (MyProject), dentro de esta carpeta metemos una subcarpeta que es donde estarán los archivos almacenados (P365I.WebResources)
Creamos en Visual Studio un proyecto de tipo Librería de clases (.net Framework) y elegimos como carpeta principal (MyProject)
Con el proyecto creado dentro del mismo, click derecho -> añadir -> recurso web y añadimos la subcarpeta anterior. 
Añadimos los siguientes archivos y carpetas:
-	archivo JSON: cuyo nombre es package.json
-	archivo de configuración JSON: cuyo nombre es package.config
-	dos carpetas con nombres src y dist, es muy importante que tengan estos nombres
A continuación, hacemos npm install para instalar todas las librerías de node necesarias para el proyecto
Añadimos una carpeta common dentro de src y despues un archivo de typescript con nombre helper.ts, guardamos y
