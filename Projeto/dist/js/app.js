import { Negociacao } from './models/Negociacao.js';

const negociacao = new Negociacao(new Date());
console.log(negociacao.volume);
