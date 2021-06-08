export class Cliente {
    constructor(
    public idClie:               number,
    public numeroIdentificacion: string,
    public primerApellido:       string,
    public segundoApellido:      string | null,
    public nombre:               string,
    public telefono1:            string,
    public telefono2:            string | null,
    public correo:               string,
    public sexo:                 string,
    public fechaNacimiento:      Date | null,
    public fechaCreacion:        Date,
    public fechaModificacion:    Date | null,
    public usuCreador:           string,
    public usuModificador:       string | null,
    public estado:               string,
    public tipoIdentificacionCodigo:     string,
    public tiId :number
    ){}
    
}
