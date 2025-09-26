/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('marcas').del()
  await knex('marcas').insert([
    {id: 1, Nome: 'Apple' , site: 'www.apple.com', telefone: '0800-761-0867' },
    
  ]);
}
