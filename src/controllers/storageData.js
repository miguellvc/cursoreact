export class StorageData {
  
    static getData(clave){
           
       return JSON.parse(localStorage.getItem([clave]));

    }

    static addDataStorage(clave, valor){
        localStorage.setItem([clave], JSON.stringify(valor))
        console.log('el state de la clase', valor);
    }
}