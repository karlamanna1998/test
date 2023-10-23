import Head from 'next/head'
import React from 'react'

export default function({repo}){
  return (
    <>
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>test</h1>
        <h2>"watchers":{repo.watchers}</h2>
      </main>
    </>
  )
}


export async function getStaticProps() {
    try{
      const res = await fetch('https://api.github.com/repos/vercel/next.js')
      const repo = await res.json()
      return { props: { repo } }
    }catch(err){
      console.log("failed to get static props");
    }
  }
