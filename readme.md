# Node backend test
This test should not take much of your time. You will be creating an a​ pi.​ You can use ​any​ f​ ramework​ you need. The api will have in total 3 endpoints:
1. First endpoint will return this data (h​ ttps://api.jsonbin.io/b/5f69afbe65b18913fc510ce8​).​ It also allows queryparamsto​filter​by‘​country’​ or‘​code’​ ando​ rder​by‘v​ at​’theresults.Youshouldvalidatequery params: filter (string), order (string and only[asc, desc]).
2. Second endpoint will return the string you sent (by url param) but reversed and vowels in uppercase.
3. Third endpoint will add to the start and/or to the end of the array the string you provide in the query.
Validate: start (string), end (string)
Createenvironmentvariables:N​ ODE_ENV​,S​ IMPLE_ARRAY​.SIMPLE_ARRAYenvvariablewillhavethearraythat you will use to append the query params of the third endpoint.
Examples:
1. First endpoint
○ Request: /countries?filter=and&order=asc
○ Response: All the countries that have ​‘and’​ in the ​country​ or c​ ode. ​And in ​ascending​ order by v​ at
2. Second endpoint
○ Request: /reverse/hello
○ Response: OllEh
3. Third endpoint
○ Request: /append?start=hello&end=bye
○ Response: [hello, ​SIMPLE_ARRAY​, bye]
  

# Arrancar proyecto
1. Instalar node.js y NPM.
2. Instalar los paquetes necesarios en la carpeta raíz con:
~~~
npm i
~~~
3. Arrancar el proyecto con 'npm start' en la carpeta raíz, debe aparece 'Server listening on port 4000'.