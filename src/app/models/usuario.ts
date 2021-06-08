export class Usuario {

    constructor(
      public idUsua:            number,
      public login:             string,
      public password:          string,
      public nombre:            string,
      public identificacion:    string,
      public correo:            string,
      public fechaCreacion:     Date,
      public  fechaModificacion: Date | null,
      public usuCreador:        string,
      public usuModificador:    string,
      public  estado:            string,
    ){
  
    }
  }