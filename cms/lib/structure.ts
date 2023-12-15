import {Iframe} from 'sanity-plugin-iframe-pane'
import {StructureBuilder} from 'sanity/desk'

import {previewUrl} from '../environment'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Головна')
        .id('home')
        .child(
          S.document()
            .id('home')
            .schemaType('home')
            .documentId('home')
            .title('Головна')
            .views([
              S.view.form(),
              S.view
                .component(Iframe)
                .title('Preview')
                .options({
                  url: `${previewUrl}/ua/?draft=true`,
                  defaultSize: 'desktop',
                }),
            ]),
        ),
      ...S.documentTypeListItems().filter((items) => items.getTitle() !== 'Головна'),
    ])

export default structure
