import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'poeme',          // identifiant unique
  title: 'Poème',         // affichage dans le Studio
  type: 'document',       // c’est un document
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Texte',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
  ],
})
