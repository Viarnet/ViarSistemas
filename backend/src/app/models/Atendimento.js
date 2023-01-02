import { model, Schema } from 'mongoose';

export const Atendimento = model('Atendimento', new Schema({
  data: {
    type: String,
    required: true,
  },
  alteracaodetitularidade: {
    type: Number,
    required: true,
    default: 0,
  }, 
  atribuiripfixo: {
    type: Number,
    required: true,
    default: 0,
  },
  bellunoresolvido: {
    type: Number,
    required: true,
    default: 0,
  },
  gerouvisita: {
    type: Number,
    required: true,
    default: 0,
  },
  huggy: {
    type: Number,
    required: true,
    default: 0,
  },
  laudotecnico: {
    type: Number,
    required: true,
    default: 0,
  },
  outrossetores: {
    type: Number,
    required: true,
    default: 0,
  },
  posbelluno: {
    type: Number,
    required: true,
    default: 0,
  },
  posos: {
    type: Number,
    required: true,
    default: 0,
  },
  posicaodeos: {
    type: Number,
    required: true,
    default: 0,
  },
  presencial: {
    type: Number,
    required: true,
    default: 0,
  },
  telefonicossac: {
    type: Number,
    required: true,
    default: 0,
  },
  visitatecnica: {
    type: Number,
    required: true,
    default: 0,
  },
 
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}));
