//where the api will be created
const puppeteer = require('puppeteer');

(async()=>{

	/*const browser = await puppeteer.launch(); //

	//create a new page
	const page = await browser.newPage();
	await page.goto('https://www.elte.hu/en/computer-science-bsc');

  

	//now take the screenshot and save it
	await page.screenshot({path: 'page.png'});
	await browser.close(); //close the browser*
*/



	//setting the width and height
	let browser = await puppeteer.launch(); 
	let anotherpage = await browser.newPage();

	let ID_NAME = await anotherpage.goto('https://www.codingbootcamp.cz/');

	anotherpage.setViewport({width: 1920, height: 1080, deviceScaleFactor: 1});
	//anotherpage.setViewport();

	await anotherpage.screenshot({path: `ID_${Date.now()}.jpg`});
	await browser.close(); //close the browser




})();
