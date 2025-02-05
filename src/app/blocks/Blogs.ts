import { Block } from 'payload'

export const Blogs: Block = {
  slug: 'blogs',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'blogApi',
      type: 'text',
      label: 'Dev.to Blog API',
      required: true,
    },
    {
      name: 'blogApiKey',
      type: 'text',
      label: 'Dev.to Blog API Key',
      required: true,
    },
    {
      name: 'profileLink',
      type: 'text',
      label: 'Dev.to Profile Link',
      required: true,
    },
  ],
}
