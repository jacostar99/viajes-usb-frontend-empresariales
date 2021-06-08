export class TipoDestino {
    constructor(
        public idTide:            number,
        public nombre:            string,
        public codigo:            string,
        public descripcion:       string,
        public fechaCreacion:     Date,
        public estado:            string,
        public usuCreador:        string,
        public usuModificador?:    string,
        public fechaModificacion?: Date | null,
        
    ){}
   
}