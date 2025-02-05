import { Block } from 'payload'

export const Skills: Block = {
  slug: 'technicalSkills',
  labels: {
    singular: 'Skill',
    plural: 'Skills',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          label: 'Color',
        },
      ],
    },
  ],
}
