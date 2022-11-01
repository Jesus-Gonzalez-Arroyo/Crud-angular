export class Empleados{

    constructor(Nombre: string, Apellido: string, Cargo: string, Sueldo: number){
        this.nombre = Nombre
        this.apellido = Apellido
        this.cargo = Cargo
        this.sueldo = Sueldo
    }

    nombre: string = ''
    apellido: string = ''
    cargo: string = ''
    sueldo: number = 0

}