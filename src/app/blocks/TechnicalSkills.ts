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
          maxLength: 36,
          admin: {
            description: 'Label for the skill, e.g., React, Node.js, etc. Should not exceed 36 characters.',
          },
        },
        {
          name: 'color',
          type: 'text',
          label: 'Color',
          admin:{
            description: 'Hex color code for the skill ring, e.g., ff5733 without the #',
          }
        },
      ],
    },
  ],
}
