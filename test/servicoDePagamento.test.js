import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('Classe de Serviço de Pagamento', function (){
    it ('Validar que ao realizar um pagamento maior que R$ 100,00 reais o tipo é categorizado como caro', function (){
        const servicoDePagamento = new ServicoDePagamento();
        servicoDePagamento.registrarPagamento('0999-0000-1111', 'Empresa A1', 100.01);
        const retorno = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(retorno.tipo, 'caro');
    })
     it ('Validar que ao realizar um pagamento menor que R$ 100,00 reais o tipo é categorizado como padrão', function (){
        const servicoDePagamento = new ServicoDePagamento();
        servicoDePagamento.registrarPagamento('0999-0000-2222', 'Empresa B2', 99.99);
        const retorno = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(retorno.tipo, 'padrao');
    })
     it ('Validar método de consultar último pagamento', function (){
        const servicoDePagamento = new ServicoDePagamento();
        servicoDePagamento.registrarPagamento('0999-0000-1111', 'Empresa A1', 100.01);
        servicoDePagamento.registrarPagamento('0999-0000-2222', 'Empresa B2', 99.99);
        const retorno = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(retorno.codigo, '0999-0000-2222');
        assert.equal(retorno.empresa, 'Empresa B2');
        assert.equal(retorno.valor, 99.99);
        assert.equal(retorno.tipo, 'padrao');
    })
})