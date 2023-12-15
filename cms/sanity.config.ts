import {defineConfig} from 'sanity'

import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {projectId} from './environment'
import {languages} from './language'
import structure from './lib/structure'
import {defaultDocumentNode} from './lib/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'horowitz-demo',

  projectId: projectId,
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool(),

    internationalizedArray({
      languages: languages,
      defaultLanguages: [languages[0].id],
      buttonAddAll: false,
      fieldTypes: ['string', 'text', 'content'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
