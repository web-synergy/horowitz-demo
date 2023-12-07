import {defineConfig} from 'sanity'

import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {projectId} from './environment'
import {languages} from './language'

export default defineConfig({
  name: 'default',
  title: 'horowitz-demo',

  projectId: projectId,
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Головна')
              .child(S.document().schemaType('home').documentId('home').title('Головна')),
            S.documentTypeListItem('news'),
          ]),
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
