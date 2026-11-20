import { knex as knexConfig } from "knex"

import config from "../../knexfile"

export const knex = knexConfig(config)
// Força a ativação das Foreign Keys assim que o Knex iniciar
knex.raw('PRAGMA foreign_keys = ON;').catch((err) => {
    console.error("Erro ao ativar Foreign Keys:", err)
})