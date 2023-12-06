import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Новини',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title[1].value'},
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      name: 'img',
      title: 'Додати зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      img: 'img',
    },
    prepare: ({title, img}) => {
      return {
        title: title[0].value,
        media: img,
      }
    },
  },
})
