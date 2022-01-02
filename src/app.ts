import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import IndexRoutes from './routes/index.routes'; // Rutas principales
import videoRoutes from './routes/video.routes'; // Rutas de videos

export class App {

    private app: Application;
    
    // Constructor
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.SV_PORT || 3000); // Configuración del puerto de conexión a la aplicación
    }

    middlewares(){
        this.app.use(morgan('dev')); // Muestra logs de conexión
        this.app.use(cors());
        this.app.use(express.json()); // Ayuda en la captura de datos por POST y PUT que vienen en formato JSON
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(){
        this.app.use(IndexRoutes); // Ruta principal
        this.app.use(videoRoutes); // Rutas de enpoints que gestionan el CRUD de los videos
    }

    // Lanzamiento del servidor usando el puerto configurado
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ',this.app.get('port'));
    }
    
}