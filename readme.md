## Demo frontend pro

- cambios counter
- main.ts
- styles.css ".card"

- añadir counter archive
- hero.ts archive
- footer archive
-

- despliegue de app con "https://vercel.com/"

que es un
vite
Oxlint
Eslint
"lint"
¿Qué es lint?

Lint es el proceso de analizar tu código para detectar:

Errores potenciales

Malas prácticas

Problemas de estilo

Código sospechoso o innecesario

No ejecuta el código, solo lo analiza estáticamente.

parar
ctr+c

arrancar
npm run dev

npm run preview
npm run build

npm run lint

diferencia entre estos 3
dev---
preview---
build----

vite-->
Carpeta Qué hace Vite
index.html Lo procesa y lo coloca en dist/
public/ Copia directo a dist/
src/ Compila y genera dist/assets/
index.html final Inyecta automáticamente los archivos compilados
vite-->
build:
1-- index.html --> dist
2- \public ------> dist
3-- \src -- compila-->dist\assets
4-- añade a index.html (inyecta) los links a los compilados

"dist es la capeta que va en el servidor de apps"

que es el código fuente? "src"
muchos ficheros ts, css, html
npm run dev
--> npm run build "para pasar entre los códigos fuente y dis"
que es el código distribuibles?
creo que solo dist un fichero
npm run preview "me enseña "
