import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from './eventType'
import post from './post'
import poemes from './poemes'
import nouvelle from './nouvelle'
import musique from './musique'
import photo from './photo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,poemes,nouvelle,musique,photo],
}

export const schemaTypes = [eventType]
