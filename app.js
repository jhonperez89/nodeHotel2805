//IMPORTO LAS VARIABLES DE ENTORNO
//require('dotenv').config() forma vieja de importar
import 'dotenv/config'

//IMPORTO LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'

//CREAR UN OBJETO DE LA CLASE SERVIDOR
let servidor=new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()

