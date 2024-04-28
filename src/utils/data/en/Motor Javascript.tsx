export const article = [
	{
		title: "Javascript Engine",
		date: "2024-04-15",
		author: "Camilo Pinzón",
		content: `
		<article class="articleText">
    <p>Imagina que estás en un país donde la gente no habla ningún idioma conocido. ¿Cómo le pides a alguien una tarea? Bueno, este problema existe cuando pasas cualquier código javascript a la computadora, no sabe cómo leerlo o interpretarlo y esta es la razón del motor Javascript, básicamente el motor javascript es un traductor que convierte el código javascript a lenguaje de máquina para que sea interpretado.</p>
	<pHoy en día existen muchos motores JavaScript algunos de los más populares son:</p>
		<ul>
			<li>
				<a href='https://spidermonkey.dev' rel='noopener' target='_blank'>SpiderMonkey</a>: El primer motor JavaScript, desarrollado por Brendan Eich en 1995 trabajando para NetScape, actualmente es el motor utilizado por Firefox
			</li>
			<li>
				<a href='https://v8.dev/' rel='noopener' target='_blank' >V8</a>: Desarrollado por Google para lograr cumplir con todas las tareas de alto desempeño requeridas por Google Maps
			</li>
			<li>
				<a href='https://developer.apple.com/documentation/javascriptcore' rel='noopener' target='_blank' >JavaScriptCore</a>:  Un intérprete de JavaScript usado en WebKit project y aplicaciones como Safari.
			</li>
		</ul>
		<span>Aquí hay una lista de los motores más populares. <a href='https://en.wikipedia.org/wiki/List_of_ECMAScript_engines' rel='noopener', target='_blank' >Link!</a></span>
	</br>
	<h2>¿Qué sucede dentro del motor JavaScript?</h2>
	<picture style='display: flex; justify-content: center; align-items: center; margin: 30px;'>
		<img
		src='/images/js-engine.webp'
		alt='Motor JavaScript'
		width='500'
		height='auto'
		style='width: 100%; max-width: 500px;'
		loading='lazy' />
	</picture>
	<p>Todos los motores tienen cambios en su funcionar, pero estos son cambios minímos, el funcionamiento básico es el mismo</p>
	<p>Estos son los pasos básicos que sigue un motor JavaScript:
		<ul>
			<li>
				El primer paso es un análisis léxico: en este paso el código se divide en bloques para intentar identificar que está tratando de hacer, se "parsea".
			</li>
			<li>
				El segundo paso: AST (Abstract syntax tree), toma el código parseado y crea una estructura de árbol, hay una herramienta en líena llamada <a href="https://astexplorer.net" rel="noopener" target="blank" >astexplorer</a> con la que puedes ver como el código es dividido y como se crea la estructura de árbol.
			</li>
		</ul>
		Interpretes y compiladores: En programación por lo general hay dos formas de transformar el código a lenguaje de máquinas, interpretar y compilar. Con el intérprete, leemos y traducimos el archivo línea por línea, solo se toma el código y se pone en codigo de bajo nivel. Cuando es compilado, el código primero es leído y analizado, el compilador trata de entenderlo antes de ponerlo en código de bajo nivel.
	</p>
</article>`,
	},
];
