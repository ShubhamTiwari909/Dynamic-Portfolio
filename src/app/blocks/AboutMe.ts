import { Block } from 'payload'

export const AboutMe: Block = {
  slug: 'aboutme',
  labels: {
    singular: 'About me',
    plural: 'About me',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'downloadCv',
      type: 'text',
      label: 'Download CV Link',
      required: true,
    },
    {
      type: 'upload',
      name: 'aboutIllustration',
      label: 'Cover Image',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}
