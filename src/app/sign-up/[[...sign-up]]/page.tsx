import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <section className='container mx-auto px-5 flex items-center justify-center my-20'>
    <SignUp />
  </section>
}