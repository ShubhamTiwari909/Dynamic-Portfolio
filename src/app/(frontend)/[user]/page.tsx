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

type Args = {
  params: Promise<{
    user?: string
  }>
}

export default async function Home({ params }: Args) {
  const { user } = await params
  const folds = await payload.find({
    collection: 'pages',
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
  return (
    <>
      <Navbar hiremeLink={docs[0].header.hireme} />
      <main className="mt-20 lg:mt-14">
        <div>
          <Hero data={docs[0].hero} />
          {docs[0]?.content?.blocks &&
            docs[0]?.content?.blocks.map((block) => {
              switch (block.blockType) {
                case 'technicalSkills':
                  return <Skills skills={block} key={block.id} />
                case 'aboutme':
                  return (
                    <Vortex backgroundColor="transparent">
                      <AboutMe aboutme={block} key={block.id} />
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
                    />
                  )
              }
            })}
        </div>
      </main>

      <Footer data={docs[0].footer} />
    </>
  )
}
