export default class ServicoDePagamento {

    #pagamentos    
    constructor() {
        this.#pagamentos = [];
    }
    registrarPagamento(codigo, empresa, valor) {
        let tipo = 'padrao';

        if (valor > 100.00) {
        tipo = 'caro'
        }
        this.#pagamentos.push({
            codigo: codigo,
            empresa: empresa,
            valor: valor,
            tipo: tipo
        })
    }
    consultarUltimoPagamento(){
        return this.#pagamentos.at(-1)
    }
}

    
