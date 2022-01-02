import { App } from './app';

async function main(){
    const app = new App(); // El puerto es 5000 se puede cambiar en el .env
    await app.listen();
}

main();