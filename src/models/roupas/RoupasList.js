export class RoupasList {
    constructor() {
        this.roupas = [];
    }

    getAllRoupas() {
        return this.roupas;
    }

    getRoupasById(id) {
        return this.roupas.find((roupa) => roupa.id == id)
    }

    getRoupaPeloTipo(){
        return this.roupas.filter((roupa) => roupa.tipo == tipo);
    }

    createRoupas(roupa) {
        this.roupas.push(roupa);
    }

    updateRoupas(id, nome, tipo, tamanho, cor, imagem, quantidade){
        this.roupas = this.roupas.map((roupa) => {
            if(roupa.id == id){
                roupa.nome = nome;
                roupa.tipo = tipo;
                roupa.tamanho = tamanho;
                roupa.cor = cor;
                roupa.imagem = imagem;
                roupa.quantidade = quantidade;
            }
            return roupa;
        });
        return this.getRoupasById(id);
    }

    deleteRoupas(id) {
        this.roupas = this.roupas.filter((roupa) => roupa.id != id);
    }
}