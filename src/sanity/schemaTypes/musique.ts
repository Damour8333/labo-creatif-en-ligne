import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'musique',          // identifiant interne
  title: 'Musique',         // affichage dans le Studio
  type: 'document',         // type document
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audio',
      title: 'Fichier audio',
      type: 'file',         // permet d’uploader un mp3 ou autre
      options: {
        accept: 'audio/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Moi',
    }),
    defineField({
      name: 'date',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
    },
  },
})
