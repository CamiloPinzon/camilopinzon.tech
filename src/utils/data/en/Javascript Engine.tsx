export const article = [
	{
		title: "Javascript Engine",
		date: "2024-04-15",
		author: "Camilo Pinzón",
		content: `<article class="articleText">
    <p>Imagine that you're in a country where the people don't speak any known language. How do you ask someone for any task? Well, this problem exist when you pass any javascript code to the computer, they don't know how to read or interpret it and this is the reason for the Javascript engine, basically the javascript engine it's a translator that convert the javascript code to to machine language to be interpreted.</p>
	<p>Now days exist a lot of js engines some of the most popular are:</p>
	<ul>
		<li>
			<a href='https://spidermonkey.dev' rel='noopener' target='_blank'>SpiderMonkey</a>: first js engine, developed by Brendan Eich in 1995 when he was working for Netscape, currently this engine is used by firefox
		</li>
		<li>
			<a href='https://v8.dev/' rel='noopener' target='_blank' >V8</a>: Developed by google to achieve the high performance demands of google maps
		</li>
		<li>
			<a href='https://developer.apple.com/documentation/javascriptcore' rel='noopener' target='_blank' >JavaScriptCore</a>:  A JavaScript interpreter, used in the WebKit project and applications such as Safari.
		</li>
	</ul>
	<span>There is a list of some of the most popular engines. <a href='https://en.wikipedia.org/wiki/List_of_ECMAScript_engines' rel='noopener', target='_blank' >Link!</a></span>
	</br>
	<h2>What happens inside the js engine?</h2>
	<picture style='display: flex; justify-content: center; align-items: center; margin: 30px;'>
		<img
		src='/images/js-engine.webp'
		alt='Js Engine'
		width='500'
		height='auto'
		style='width: 100%; max-width: 500px;'
		loading='lazy' />
	</picture>
	<p>All engines can change in the way their work, but those are minimal changes, the basic functioning it's the same</p>
	<p>Those are the steps that basically follow a js engine:
		<ul>
			<li>
				The first step it's a lexical analysis: in this step the code is splitted in blocks to identify what the code it's trying to do, it's parsed.
			</li>
			<li>
				The second step: AST (Abstract syntax tree), takes the parsed code and made a tree structure, there is a online tool called <a href='https://astexplorer.net' rel='noopener' target='blank' >astexplorer</a> that you can use to see how the code is spplited and organized in this tree structure.
			</li>
		</ul>
		Interpreters and compilers: In programming generally we have two ways of translate into machine language, interpreter and compiler.
Whit the interpreter we read and translate the file line by line, just take the code and put it in low level code, when it's compiled, the code first it's read and analized, the compiler try to understand it before put it in low level code.
	</p>
</article>`,
	},
];
