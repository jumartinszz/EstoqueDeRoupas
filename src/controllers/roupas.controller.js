import { Roupas } from "../models/roupas/Roupas.js";
import { RoupasList } from "../models/roupas/RoupasList.js";

const list = new RoupasList();

export const getAllRoupas = (req, res) => {
    const { tamanho, tipo, cor } = req.query;
    let roupas = list.getAllRoupas();

    if (roupas.length == 0) {
        return res.status(404).send({ message: "Nenhuma roupa encontrada" });
    } else{

        if (tamanho) {
            roupas = roupas.filter(roupa => roupa.tamanho === tamanho);
        }
        if (tipo) {
            roupas = roupas.filter(roupa => roupa.tipo === tipo);
        }
        if (cor) {
            roupas = roupas.filter(roupa => roupa.cor === cor);
        }
        else {
            let contador = roupas.length;

            return res.status(200).send({ contador, roupas });
        }
    }
}

export const getRoupasById = (req, res) => {
    const { id } = req.params;

    const roupa = list.getRoupasById(id);

    if (!roupa) {
        return res.status(404).send({ message: "Roupa não encontrada" });
    }
    return res.send(roupa);
}

export const createRoupas = (req, res) => {
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;

    let error = [];

    if (nome.length < 6 || nome.length > 40) {
        error.push("O nome deve ter pelo menos seis caracteres");
    }
    if (tipo.length > 50) {
        error.push("O tipo deve ter pelo menos cinquenta caracteres");
    }
    if (tamanho != "PP" && tamanho != "P" && tamanho != "M" && tamanho != "G" && tamanho != "GG" && tamanho != "XG") {
        error.push("O tamanho deve ser PP, P, M, G, GG e XG");
    }
    if (cor.length > 20) {
        error.push("A cor deve ter pelo menos vinte caracteres");
    }
    if (quantidade < 1 || quantidade > 15000) {
        error.push("A quantidade precisa ser um número inteiro entre 1 e 15.000");
    }
    if (!imagem.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)) {
        error.push("A imagem deve ser um URL válido com .jpg, .png ou .jpeg");
    }
    if (error.length) {
        return res.status(400).send({ messages: error });
    } else {
        const roupa = new Roupas(nome, tipo, tamanho, cor, imagem, quantidade);
        list.createRoupas(roupa);
        return res.status(201).send({ message: `Roupa criada com sucesso`, roupa });
    }
}

export const updateRoupas = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;

    let error = [];

    if (nome.length < 6 || nome.length > 40) {
        error.push("O nome deve ter pelo menos seis caracteres");
    }
    if (tipo.length > 50) {
        error.push("O tipo deve ter pelo menos cinquenta caracteres");
    }
    if (tamanho != "PP" && tamanho != "P" && tamanho != "M" && tamanho != "G" && tamanho != "GG" && tamanho != "XG") {
        error.push("O tamanho deve ser PP, P, M, G, GG e XG");
    }
    if (cor.length > 20) {
        error.push("A cor deve ter pelo menos vinte caracteres");
    }
    if (quantidade < 1 || quantidade > 15000) {
        error.push("A quantidade precisa ser um número inteiro entre 1 e 15.000");
    }
    if (!imagem.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)) {
        error.push("A imagem deve ser um URL válido com .jpg, .png ou .jpeg");
    }
    if (error.length) {
        return res.status(400).send({ messages: error });
    } else {
        const roupa = new Roupas(id, nome, tipo, tamanho, cor, imagem, quantidade);
        list.createRoupas(roupa);
        return res.status(201).send({ message: `Roupa atualizada com sucesso`, roupa });
    }
}

export const deleteRoupas = (req, res) => {
    const { id } = req.params;
    const roupa = list.getRoupasById(id);

    if (!roupa) {
        return res.status(404).send({ message: "Roupa não encontrada" });
    }
    list.deleteRoupas(id);

    return res.status(200).send({ message: `Roupa deletada com sucesso`, roupa });
}