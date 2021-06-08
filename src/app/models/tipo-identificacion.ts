export class TipoIdentificacion {
    constructor(
    public idTiid:            number,
    public codigo:            string,
    public nombre:            string,
    public fechaCreacion:     Date,
    public fechaModificacion: Date | null,
    public usuCreador:        string,
    public usuModificador:    string | null,
    public estado:            string
    ){}
}