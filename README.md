# Commission Upload Portal

Sitio estatico para GitHub Pages + backend de Google Apps Script que guarda los archivos en una carpeta concreta de Google Drive.

## Archivos incluidos

- `index.html`
- `styles.css`
- `script.js`
- `Code.gs`
- `appsscript.json`

## Como funciona

1. El cliente llena el formulario en GitHub Pages.
2. El frontend convierte cada archivo a base64 en el navegador.
3. El navegador manda cada archivo al web app de Apps Script con un formulario oculto.
4. Apps Script decodifica el archivo y lo guarda directo en tu carpeta de Google Drive.
5. La respuesta vuelve por `postMessage` para mostrar exito o error sin romper GitHub Pages.

## Setup paso a paso

### 1) Crear el proyecto de Google Apps Script

1. Ve a https://script.google.com/.
2. Crea un proyecto nuevo.
3. Borra el contenido por defecto y pega `Code.gs`.
4. Agrega el archivo `appsscript.json` en el editor de manifiesto si vas a trabajar con un proyecto fuente.

### 2) Poner el ID de tu carpeta de Drive

1. Abre la carpeta destino en Google Drive.
2. Copia el ID de la URL.
3. La URL se ve asi:

   `https://drive.google.com/drive/folders/FOLDER_ID_AQUI`

4. Pega ese valor en `Code.gs` dentro de `CONFIG.folderId`.

### 3) Desplegar como Web App

1. En Apps Script, ve a **Deploy > New deployment**.
2. Elige **Web app**.
3. En **Execute as**, selecciona **Me**.
4. En **Who has access**, selecciona **Anyone**.
5. Haz clic en **Deploy**.
6. Autoriza los permisos cuando te los pida.
7. Copia la URL que termina en `/exec`.

### 4) Conectar el frontend de GitHub Pages

1. Abre `script.js`.
2. Reemplaza `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` con la URL `/exec` del paso anterior.
3. Guarda y publica los cambios en GitHub.

### 5) Publicar en GitHub Pages

1. Sube estos archivos al repositorio de tu sitio.
2. Ve a **Settings > Pages** en GitHub.
3. Elige la rama y la carpeta donde estan `index.html`, `styles.css` y `script.js`.
4. Espera a que GitHub Pages genere la URL publica.

## Prueba rapida

1. Abre tu sitio de GitHub Pages.
2. Completa nombre, contacto, descripcion y archivos.
3. Envia el formulario.
4. Revisa tu carpeta de Google Drive para confirmar que los archivos llegaron.

## Notas utiles

- El formulario soporta varios archivos.
- El progreso se muestra en pantalla mientras el navegador prepara y envia cada archivo.
- Si tus archivos son muy pesados, puedes topar limites practicos de Apps Script y del navegador.
- La configuracion usa `DriveApp` para guardar todo directo en la carpeta indicada.

## Fuentes oficiales utiles

- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/reference/html/x-frame-options-mode
- https://developers.google.com/apps-script/manifest
