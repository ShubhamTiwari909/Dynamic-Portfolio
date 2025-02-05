import { ArrayField, Field } from 'payload'

export const Tagline: Field = {
  name: 'tagline',
  type: 'text',
  label: 'Tagline',
  maxLength: 20,
  required: true,
  defaultValue: 'Hi i am',
}

export const Name: Field = {
  name: 'name',
  type: 'text',
  label: 'Name',
  maxLength: 25,
  required: true,
  defaultValue: 'Shubham Tiwari',
}

export const Role: Field = {
  name: 'role',
  type: 'text',
  label: 'Role',
  required: true,
  maxLength: 40,
  defaultValue: 'Jr. Frontend Engineer',
}

export const SocialLinks: Field = {
  type: 'collapsible',
  label: 'Social Links',
  required: true,
  fields: [
    {
      name: 'githubLink',
      type: 'text',
      label: 'Github Link',
    },
    {
      name: 'linkedinLink',
      type: 'text',
      label: 'Linkedin Link',
    },
    {
      name: 'blogLink',
      type: 'text',
      label: 'Blog Link',
    },
  ],
}

export const HireMe: Field = {
  name: 'hireme',
  type: 'text',
  label: 'Hire me Link',
  defaultValue: '',
}

export const DownloadCV: Field = {
  name: 'downloadcv',
  type: 'text',
  label: 'CV or Resume Link',
  required: true,
  defaultValue: '',
}

export const Stats: ArrayField = {
  name: 'stats',
  type: 'array',
  label: 'Stats',
  maxRows: 4,
  fields: [
    {
      name: 'statNumber',
      type: 'text',
      label: 'Stat number',
      required: true,
    },
    {
      name: 'statText',
      type: 'text',
      label: 'State Text',
      required: true,
    },
  ],
}

export const HeroImage: Field = {
  type: 'upload',
  name: 'heroImage',
  label: 'Cover Image',
  relationTo: 'media',
  required: true,
  filterOptions: {
    mimeType: { contains: 'image' },
  },
}
