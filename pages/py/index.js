import React from 'react';
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/py.module.css';


//fetch data
//在运行期间运行
export const getStaticProps = async () => {
    //在组件被render前去fetch data
    //类似于react中useEffect(componentDidMount) 去加载数据
    const  response = await fetch('https://jsonplaceholder.typicode.com/users');
    const  data = await response.json();
    return {
        props:{
            pys:data
        }
    }
}

const PY = ({pys}) => {
    return (
        <>
            <Head>
                <title>Py list</title>
                <meta charSet='utf-8' name='py-list' content='list'/>
            </Head>
            <div>
                {pys.map(py => (
                    <Link key={py.id} href={`/py/${py.id}`}>
                       <a className={styles.single}>
                           <h3>{py.name}</h3>
                       </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default PY;
