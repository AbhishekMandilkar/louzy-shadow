import FormBuilder from '@/components/form-builder/FormBuilder'
import {title} from '@/components/primitives'
import React from 'react'

function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  return (
    // <FormBuilder form={{}} />
    <div className='flex flex-col'>
      <h1 className={title()}>
        {params.slug }
        {
          searchParams?.newForm && 'New Form'
        }
      </h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
      <h1 className={title()}>Forms</h1>
    </div>
  )
}

export default Page