import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

import Hero from '../(components)/Hero/Hero'
import Skills from '../(components)/Skills'
import AboutMe from '../(components)/AboutMe'
import { Vortex } from '../(components)/Vortex'
import Blogs from '../(components)/Blogs/Blogs'
import { notFound } from 'next/navigation'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'
import { uploadThingUrlConstructor } from '../lib/utils'
import Project from '../(components)/Projects/Project'
import { draftMode } from 'next/headers'
import { RefreshRouteOnSave } from '@/collections/utils/RefreshRouteOnSave'

type Args = {
  params: Promise<{
    user?: string
  }>
}

const payloadData = async (user: string | undefined) => {
  const { isEnabled: draft } = await draftMode()
  const folds = await payload.find({
    collection: 'pages',
    draft,
    where: {
      slug: {
        equals: user,
      },
    },
  })
  const { docs } = folds
  if (docs.length === 0) {
    notFound()
  }
  return docs
}

export const generateMetadata = async ({ params }: Args) => {
  const { user } = await params

  const docs = await payloadData(user)
  return {
    title: docs[0]['ppc-seo']?.title,
    description: docs[0]['ppc-seo']?.description,
    openGraph: {
      title: docs[0]['ppc-seo']?.title,
      description: docs[0]['ppc-seo']?.description,
      images: uploadThingUrlConstructor(
        typeof docs[0]['ppc-seo']?.image !== 'string' ? docs[0]['ppc-seo']?.image?._key : '',
      ),
    },
    twitter: {
      card: 'summary_large_image',
      title: docs[0]['ppc-seo']?.title,
      description: docs[0]['ppc-seo']?.description,
      images: uploadThingUrlConstructor(
        typeof docs[0]['ppc-seo']?.image !== 'string' ? docs[0]['ppc-seo']?.image?._key : '',
      ),
    },
  }
}

export default async function Home({ params }: Args) {
  const { user } = await params
  const docs = await payloadData(user)
  const { isEnabled: draft } = await draftMode()

  const links: { href: string; label: string }[] = []

  docs[0].content?.blocks?.map((block) => {
    switch (block.blockType) {
      case 'aboutme':
        links.push({ href: `#about-${block.id}`, label: block.title })
        break
      case 'technicalSkills':
        links.push({ href: `#skills-${block.id}`, label: block.title })
        break
      case 'blogs':
        links.push({ href: `#blogs-${block.id}`, label: block.title })
        break
      case 'projects':
        links.push({ href: `#projects-${block.id}`, label: block.title })
        break
    }
  })

  return (
    <main data-theme={docs[0].themes.theme} className="relative">
      {draft && <RefreshRouteOnSave />}
      <Navbar hiremeLink={docs[0].header.hireme} links={links} />
      <div className="mt-20 lg:mt-14">
        <Hero data={docs[0].hero} />
        {docs[0]?.content?.blocks &&
          docs[0]?.content?.blocks.map((block) => {
            switch (block.blockType) {
              case 'technicalSkills':
                return <Skills skills={block} key={block.id} blockId={block.id} />
              case 'aboutme':
                return (
                  <Vortex key={block.id} backgroundColor="transparent">
                    <AboutMe aboutme={block} blockId={block.id} />
                  </Vortex>
                )
              case 'blogs':
                return (
                  <Blogs
                    profileLink={block.profileLink}
                    heading={block.title}
                    blogApi={block.blogApi}
                    blogApiKey={block.blogApiKey}
                    key={block.id}
                    blockId={block.id}
                  />
                )
              case 'projects':
                return (
                  <Project
                    project={{
                      title: block.title,
                      projects: block.projects,
                    }}
                    key={block.id}
                    blockId={block.id}
                  />
                )
            }
          })}
      </div>
      <Footer data={docs[0].footer} />
    </main>
  )
}
