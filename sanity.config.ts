'use client'

/**
 * Sanity Studio configuration
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Variables d'environnement Sanity
import { apiVersion, dataset, projectId } from './src/sanity/env'

// Schémas : on importe l'objet schema tel qu'il est défini dans index.ts
import { schema } from './src/sanity/schemaTypes'

// Structure personnalisée
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema, // on utilise directement l'objet schema existant
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
