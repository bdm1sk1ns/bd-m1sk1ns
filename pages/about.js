import Head from 'next/head';
import HeaderComp from '../components/header/header.comp';

const About = () => {
    return(
        <div className="flex flex-col h-screen bg-white">
            <Head>
                <title>Bd-miskins</title>
            </Head>
            <div className="text-black">
                 <HeaderComp />
            </div>
            <main className="flex-1 overflow-y-auto lg:p-5 p-2">
                <div className="text-center">
                    <section className="text-2xl font-light tracking-widest">Why?</section>
                    <section className="text-justify font-light pt-6 px-6 lg:px-24">Many companies doesn't valuate their employees fully. Hell Most company doesn't valuate
                        their employees properly. But a few companies crosses the HUMANE limit and makes the qualification and hard 
                        work of the student seem like a joke. This website keeps a track of those shitty companies.
                    </section>
                </div>
            </main>
            <div className="text-center p-4">
                <section className="pl-10 font-light">Creators</section>
                <div className="text-sm lg:text-lg font-light">
                    <section className="inline p-2">Idea >> <a href="#" className="font-normal">Shoriful Islam Sagore</a></section>
                    <section className="inline p-2">Code >> <a href="#" className="font-normal">Oni Laertes</a></section>
                </div>
            </div>
        </div>
    )
}

export default About;