import Head from 'next/head';
import Link from 'next/link';
import HeaderComp from '../components/header/header.comp';

const Layout = (props) => {
    return(
        <div style={{whiteSpace: "pre-line"}}>
            <div className="flex flex-col h-screen bg-white">
                <Head>
                    <title>Bd-miskins: Miskin comapnies of Bangladesh</title>
                </Head>
                <div className="inline text-black">
                    <HeaderComp />
                </div>

                <main className="flex-1 overflow-y-auto lg:p-5 p-2">
                    {props.children}
                </main>

                <div className="text-right">
                    <section className="mb-2 p-2 cursor-pointer" style={{ color: "#DB2777" }}>
                        <Link href="/about">
                            <span className="tracking-widest text-md lg:text-xl font-light p-3 rounded">What is this?</span>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Layout;
