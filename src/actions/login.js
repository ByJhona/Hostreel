export const LOGAR = 'LOGIN::LOGAR';
export const SAIR = 'LOGIN::SAIR';


export function logarLogin(){
    return{
        type: "REQUEST_LOGIN"
    }
};

export const sairLogin = () =>({
    type: SAIR
});