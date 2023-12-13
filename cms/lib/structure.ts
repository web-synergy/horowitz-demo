import {StructureBuilder} from 'sanity/desk'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Головна')
        .child(S.document().schemaType('home').documentId('home').title('Головна')),
      ...S.documentTypeListItems().filter((items) => items.getTitle() !== 'Головна'),
    ])

export default structure
