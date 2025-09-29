import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'nouvelle',       // identifiant unique
  title: 'Nouvelle',      // affichage dans le Studio
  type: 'document',       // c’est un document
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100), // titre obligatoire
    }),
    defineField({
      name: 'body',
      title: 'Texte',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Moi', // tu peux changer ou laisser vide
    }),
    defineField({
      name: 'date',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: new Date().toISOString(), // valeur par défaut : date actuelle
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Nouvelle', value: 'nouvelle' },
          { title: 'Poème', value: 'poeme' },
          { title: 'Musique', value: 'musique' },
          { title: 'Photo', value: 'photo' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
    },
  },
})
