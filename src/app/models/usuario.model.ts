export class Usuario{
  constructor(
    public email: string,
    public password: string,
    public idUsuario?: number,
    public nombre?: string,
    public imegen?: string,
    public google?: boolean,
    public activo?: boolean,
    public nativo?: boolean,
  ){}
}
