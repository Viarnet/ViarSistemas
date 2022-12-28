import { model, Schema } from 'mongoose';

export const Atendimento = model('Atendimento', new Schema({
  data: {
    type: String,
    required: true,
  },
  alteracaodetitularidade: {
    type: String,
    required: true,
  }, 
  atribuiripfixo: {
    type: String,
    required: true,
  },
  bellunoresolvido: {
    type: String,
    required: true,
  },
  gerouvisita: {
    type: String,
    required: true,
  },
  huggy: {
    type: String,
    required: true,
  },
  laudotecnico: {
    type: String,
    required: true,
  },
  outrossetores: {
    type: String,
    required: true,
  },
  posbelluno: {
    type: String,
    required: true,
  },
  posos: {
    type: String,
    required: true,
  },
  posicaodeos: {
    type: String,
    required: true,
  },
  presencial: {
    type: String,
    required: true,
  },
  telefonicossac: {
    type: String,
    required: true,
  },
  visitatecnica: {
    type: String,
    required: true,
  },
 
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}));
