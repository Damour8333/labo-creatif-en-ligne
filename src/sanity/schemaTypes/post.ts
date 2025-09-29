// src/sanity/schemaTypes/post.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',       // identifiant du type
  title: 'Post',      // affichage dans le Studio
  type: 'document',   // c’est un document (pas un objet)
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
