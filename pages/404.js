import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import {useEffect} from "react";
import {useRouter} from 'next/router';
const ErrorPage = () => {

    const  router = useRouter();

    useEffect(()=>{
       console.log('useEffect run');
       let timer = setTimeout(() => {
           //2s后自动跳到主页homepage
          router.push("/");
       },2000);
       return () => {
           clearTimeout(timer);
       }
    },[]);

    return (
        <>
            <Head>
                <title>404 pages</title>
                <meta name='404 pages' content='404 pages'/>
            </Head>
            <div className='not-found'>
                <h1>Oooops...</h1>
                <h2>That page can not be found</h2>
                <p>
                    Go back to the
                    <Link href='/'>
                        <a >HomePage</a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default ErrorPage;
