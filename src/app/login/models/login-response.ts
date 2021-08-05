export class LoginResponse{

    OK: boolean = false; 
    OK_ESTADO: boolean = false; 
    ID_USUARIO!: number;
    CODIGO_USUARIO!: string;
    NOMBRE_EMP!: string; 
    listaPerfiles: any[] = []; 
}