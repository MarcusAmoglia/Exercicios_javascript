// EX 10: Projeto Integrado (Sistema de Login com Operadores Lógicos)
{
function AUTENTICAR(usuario,senha){
    if (usuario === "admin" && senha === 1234)
        console.log(`ACESSO PERMITIDO`);
    else
        console.log(`ACESSO NEGADO`);
}
AUTENTICAR('admin',1234)
}