import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Новини',
  type: 'object',
  fields: [
    defineField({
      name: 'titleNews',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'imgSrcNew',
      title: 'Додати зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'titleNews[0].value',
      img: 'imgSrcNew',
    },
    prepare: ({title, img}) => ({
      title: title,
      media: img,
    }),
  },
})
