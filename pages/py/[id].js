import React from 'react';

export const  getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map((user) => {
        return {
            params:{id:user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false,
    }
}


//得到几个id，就运行方法getStaticProps多少次
export const  getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props:{
            py:data,
        }
    }
}

const Details = ({py}) => {
    return (
        <div>
            <h1>{py.name}</h1>
            <p>{py.email}</p>
            <p>{py.website}</p>
            <p>{py.address.city}</p>
        </div>
    );
};

export default Details;
