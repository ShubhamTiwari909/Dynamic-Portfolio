import { Block } from 'payload'

export const Projects: Block = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      maxLength: 50,
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      label: 'Projects',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          maxLength: 50,
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          maxLength: 720,
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Project Link',
          required: true,
        },
        {
          type: 'upload',
          name: 'projectCover',
          label: 'Cover Image',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
      ],
    },
  ],
}
