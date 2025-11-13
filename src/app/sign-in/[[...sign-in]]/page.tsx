import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <section className='container mx-auto px-5 min-h-[40vh] flex items-center justify-center my-20'>
    <SignIn />
  </section>
}