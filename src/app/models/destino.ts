import { TipoDestino } from "./tipo-destino";

export class Destino {
    constructor( 
        public idDest:            number,
        public nombre:            string,
        public codigo:            string,
        public descripcion:       string,
        public tierra:            string,
        public aire:              string,
        public mar:               string,
        public fechaCreacion:     Date,       
        public usuCreador:        string,
        public estado:            string,
        public tipoDestinoCodigo: string,
        
        public fechaModificacion?: Date | null,
        public usuModificador?:    string,
      ){}
    
}