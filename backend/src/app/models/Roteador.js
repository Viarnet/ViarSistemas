import { model, Schema } from 'mongoose';

export const Roteador = model('Roteador', new Schema({
  nome: {
    type: String,
    required: true,
  },
  compatibilidade: {
    type: String,
    required: true,
  }, 
  wan: {
    type: String,
    required: true,
  },
  lan: {
    type: String,
    required: true,
  },
  redeswifi: {
    type: String,
    required: true,
  },
  cobertura2g: {
    type: String,
    required: true,
  },
  cobertura5g: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  }
}));
