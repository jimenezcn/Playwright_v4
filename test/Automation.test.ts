import { chromium } from "playwright";

const playwright = require("playwright");

describe('Test VMWare functionality on Browser', () => {

/*
    test('Is: Automatización de Servicios Infraestructura - Cloud Services Console, is available?', async () => {

        const browser = await chromium.launch( { headless: false } );
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://bc-advra-102.central.bccr.fi.cr/csp/gateway/portal/#/consumer');

        //Wait time in milisecons that system will do before moving to the next code line to be executed
        await page.waitForTimeout(3000);

        //Closing the web browser
        page.close();

    }, 30000 );
*/

///*
    test('Create: W2016-PROD-APP-SINPE.CR, Server', async () => {

        const browser = await chromium.launch( { headless: false } );
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://bc-advra-102.central.bccr.fi.cr/csp/gateway/portal/#/consumer');
        //await page.waitForTimeout(100000);


        //Click Next button to continue to LogIn Page
        await page.click("text=Next");
        
        //Enter Username
        await page.fill( "input[name='username']" , 'jimenezcn' );
        //Enter Password
        await page.fill( "input[name='password']" , '*2022Doctor' );

        //Click SignIn button to continue to main module
        await page.click("text=Sign in");


        //Click on Service Broker Option
        await page.click("text=Service Broker");

        //Enter to search button name
        await page.fill( "input[name='searchValue']" , 'SINPE' );

        //Click on Request button on the button from Catalog
        await page.click("text=Request");


        //GENERAL MODULE
        //Enter Numer de Solicitud
        await page.fill( "input[id='input_General~NumeroSolicitud']" , "123" );

        //expect(await page.isEnabled("#input_General~NumeroSolicitud")).toBe(true);
        expect(await page.isEditable("#input_General~NumeroSolicitud")).toBe(true);

        //const EnterNumeroSolicitud = await page.$("#input_General~NumeroSolicitud")
        //await EnterNumeroSolicitud?.fill("123")
            
        //Enter Solicitante
        await page.fill( "input[id='input_General~Solicitante']" , "Ney Fred Jimenez" );
        //const NumeroSolicitud = await page.getAttribute("id=input_General~NumeroSolicitud","value");
        //console.log(NumeroSolicitud);

        //Select Tamano - MEDIUM
        await page.selectOption('[id="input_General~Size"]', '2: JTdCJTIydmFsdWUlMjIlM0ElMjJWMS1NJTIyJTdE');
        
        
        //DETALLE MODULE
        await page.click('text=Detalle')

        //Select Rol - MIDLE
        await page.selectOption('[id="input_General~Rol"]', { label: "Infraestructura" } );

        //Select Sistema - Kafka
        //PRORROGAS; 54: JTdCJTIydmFsdWUlMjIlM0ElMjJQUkclM0FQUk9SUk9HQV
        // Kafka; 1: JTdCJTIydmFsdWUlMjIlM0ElMjJLRkslM0FLYWZrYSUyMiU
        //await page.selectOption('[id="input_General~Sistema"]', {label: 'Kafka'});
        await page.selectOption('[id="input_General~Sistema"]', {label: 'Kafka'});

        //Select Ubicacion - CPDP
        await page.selectOption('[id="input_General~Ubicacion"]', '1: JTdCJTIydmFsdWUlMjIlM0ElMjJDUERQJTIyJTdE');


        //RED MODULE
        await page.click('body > cs-catalog-ui-app > clr-main-container > div > main > ng-component > div > div.content-area > form > section.content-section > cs-custom-forms > cf-renderer-main > cf-container-fluid > ul > cf-nav:nth-child(4) > li > a')

        //Select VLAN - Infraestructura SINPE (2133)
        await page.selectOption('[id="input_Networking~VLAN"]', '1: JTdCJTIydmFsdWUlMjIlM0ElMjIyMTMzJTIyJTdE');


        //Wait time in milisecons that system will do before moving to the next code line to be executed
        await page.waitForTimeout(5000);

        //Submit button
        //await page.click('text=Submit');

        
        //Process will check if URL after submit is the following, otherwise will fail the test.
        //await page.waitForURL('https://bc-advra-102.central.bccr.fi.cr/catalog/#/workload/deployment');

        //await page.close()

    }, 50000 );

/*
    test('Create: W2016-PROD-APP-SUGEVAL.FI.CR Server', async () => {

        const browser = await chromium.launch( { headless: false } );
        const context = await browser.newContext();
        const page = await context.newPage();
        //Launch browser
        await page.goto('https://bc-advra-102.central.bccr.fi.cr/csp/gateway/portal/#/consumer');
        //await page.waitForTimeout(100000);


        //Click Next button to continue to LogIn Page
        await page.click("text=Next");
        
        //Enter Username
        await page.fill( "input[name='username']" , 'jimenezcn' );
        //Enter Password
        await page.fill( "input[name='password']" , '*2022Doctor' );

        //Click SignIn button to continue to main module
        await page.click("text=Sign in");


        //Click on Service Broker Option
        await page.click("text=Service Broker");

        //Enter to search button name
        await page.fill( "input[name='searchValue']" , 'W2016-PROD-APP-SUGEVAL.FI.CR' );

        //Click on Request button on the button from Catalog
        await page.click("text=Request");


        //GENERAL MODULE
        //Enter Numer de Solicitud
        await page.fill( "input[id='input_General~NumeroSolicitud']" , "123" );    
        //const EnterNumeroSolicitud = await page.$("#input_General~NumeroSolicitud")
        //await EnterNumeroSolicitud?.fill("123")
            
        //Enter Solicitante
        await page.fill( "input[id='input_General~Solicitante']" , "Ney Fred Jimenez" );
        //const NumeroSolicitud = await page.getAttribute("id=input_General~NumeroSolicitud","value");
        //console.log(NumeroSolicitud);

        //Select Tamano - MEDIUM
        await page.selectOption('[id="input_General~Size"]', '2: JTdCJTIydmFsdWUlMjIlM0ElMjJWMS1NJTIyJTdE');


        //DETALLE MODULE
        await page.click('text=Detalle')

        //Select Rol - MIDLE
        await page.selectOption('[id="input_General~Rol"]', { label: "Infraestructura" } );

        //Select Sistema - Kafka
        //PRORROGAS; 54: JTdCJTIydmFsdWUlMjIlM0ElMjJQUkclM0FQUk9SUk9HQV
        // Kafka; 1: JTdCJTIydmFsdWUlMjIlM0ElMjJLRkslM0FLYWZrYSUyMiU
        //await page.selectOption('[id="input_General~Sistema"]', {label: 'PRORROGAS SUGEF'});
        await page.selectOption('[id="input_General~Sistema"]', {label: 'Kafka'});

        //Select Ubicacion - CPDP
        await page.selectOption('[id="input_General~Ubicacion"]', '1: JTdCJTIydmFsdWUlMjIlM0ElMjJDUERQJTIyJTdE');

        
        //RED MODULE
        await page.click('body > cs-catalog-ui-app > clr-main-container > div > main > ng-component > div > div.content-area > form > section.content-section > cs-custom-forms > cf-renderer-main > cf-container-fluid > ul > cf-nav:nth-child(4) > li > a')

        //Select VLAN - Infraestructura SINPE (2133)
        await page.selectOption('[id="input_Networking~VLAN"]', { label: 'Middle (2216)' });

        //Submit button
        //await page.click('text=Submit');

        await page.close()

    }, 50000 );
*/


})
