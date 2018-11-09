//cargar la aplicacion de electron
const app=require('electron').app;
//crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//ruta del sistema de archivos del S.O.
const path=require('path');
const url=require('url');
//otra forma de declarar una constante
//Pantalla principal
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//Creamos una pantalla vacia
	PantallaPrincipal= new BrowserWindow({width:380,height:420});
	//Cargamos en la pantalla el contenido de nuestra pagina
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//Mostramos la pantalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);