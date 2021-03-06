import Head from 'next/head';
import Link from 'next/link';
import HeaderComp from '../components/header/header.comp';

const Layout = (props) => {
    return(
        <div className="flex flex-col h-screen bg-white">
            <Head>
                <title>Bd-miskins</title>
            </Head>
            <div className="inline text-black">
                <HeaderComp />
            </div>

            <main className="flex-1 overflow-y-auto lg:p-5 p-2">
                {props.children}
            </main>

            <footer className="text-right">
                <section className="mb-2 p-2 cursor-pointer">
                    <Link href="/about">
                        <span className="tracking-widest text-md font-light text-red-200 p-3 rounded">What is this?</span>
                    </Link>
                </section>
            </footer>
        </div>
    )
}

export default Layout;
