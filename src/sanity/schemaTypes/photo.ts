import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo / Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // permet de recadrer facilement dans le Studio
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
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Dessin', value: 'dessin' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'author',
    },
  },
})
