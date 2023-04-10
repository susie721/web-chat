import React, { useState, useEffect } from 'react'
// import useUser from '@/lib/useUser'
import {GetStaticPropsContext} from 'next'
import PageLayout from '@/components/PageLayout'
// import Form from 'components/Form'
import fetchJson, { FetchError } from '@/lib/fetchJson'

export default function Login() {
  // here we just check if user is already logged in and redirect to profile
//   const { mutateUser } = useUser({
//     redirectTo: '/profile-sg',
//     redirectIfFound: true,
//   })
useEffect(() => {
    async function fetchData(){
        await fetch('/api/web/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: 'oSo1t1bhX4dxZxRax4raF9xjbGt4'})
        })
    }
    if (typeof window !== 'undefined') {
        fetchData()
      }
}, [])
//   const [errorMsg, setErrorMsg] = useState('')

  return (
    <PageLayout title="登录">
      <div className="login">
        dd
        {/* <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault()

            const body = {
              username: event.currentTarget.username.value,
            }

            try {
              mutateUser(
                await fetchJson('/api/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(body),
                })
              )
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message)
              } else {
                console.error('An unexpected error happened:', error)
              }
            }
          }}
        /> */}
      </div>
    </PageLayout>
  )
}
export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
      props: {
        messages: (await import(`../../../messages/${locale}/index.json`)).default
      }
    };
}