import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Відео',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Посилання на відео',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: title,
    }),
  },
})
