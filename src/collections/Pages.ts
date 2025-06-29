import type { CollectionConfig } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { revalidatePage, revalidateDelete } from '@/collections/utils/revalidatePage'
import {
  DownloadCV,
  HeroImage,
  HireMe,
  Name,
  Role,
  SocialLinks,
  Stats,
  Tagline,
} from '@/fields/hero'
import { Skills } from '@/app/blocks/TechnicalSkills'
import { AboutMe } from '@/app/blocks/AboutMe'
import { Blogs } from '@/app/blocks/Blogs'
import { Email, Phone } from '@/fields/footer'
import { Projects } from '@/app/blocks/Projects'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt', 'updatedAt', '_status'],
    livePreview: {
      url: ({ data }) => `${process.env.PREVIEW_URL}/${data.slug}`,
    },
    preview: ({ slug }) => `${process.env.PREVIEW_URL}/${slug}`,
  },
  hooks: {
		afterChange: [revalidatePage],
		afterDelete: [revalidateDelete],
	},
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'The URL slug for this page',
      },
      index: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          fields: [Tagline, Name, Role, SocialLinks, HireMe, DownloadCV, Stats, HeroImage],
        },
        {
          name: 'content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [Skills, AboutMe, Blogs, Projects],
            },
          ],
        },
        {
          name: 'header',
          fields: [
            {
              name: 'hireme',
              label: 'Hire Me link',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'footer',
          fields: [SocialLinks, Email, Phone, Name],
        },
        {
          name: 'ppc-seo',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
        {
          name: 'themes',
          fields: [
            {
              name: 'theme',
              type: 'select',
              options: [
                {
                  label: 'Orange',
                  value: 'orange',
                },
                {
                  label: 'Emerald',
                  value: 'emerald',
                },
                {
                  label: 'Violet',
                  value: 'violet',
                },
                {
                  label: 'Red',
                  value: 'red',
                },
                {
                  label: 'Sky',
                  value: 'sky',
                },
              ],
              defaultValue: 'orange',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  versions: {
		drafts: true,
		maxPerDoc: 100,
	},
}
