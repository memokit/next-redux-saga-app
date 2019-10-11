import Head from 'next/head';
import { Provider } from 'mobx-react'
import Layout from '../Layout';

function Blog(props) {
    return (
        // <Provider store={store}>
        //     <Layout title={props.title}>
        //         <Head>
        //             <title>My Blog</title>
        //         </Head>
        //         <div>
        //             Hello My Blog =>
        //         </div>
        //     </Layout>
        // </Provider>

        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <div>
                Hello My Blog =>
            </div>
        </>
    );
}


export default Blog;
