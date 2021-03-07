import Head from 'next/head';
import HeaderComp from '../components/header/header.comp';

const About = () => {
    return(
        <div className="flex flex-col h-screen bg-white">
            <Head>
                <title>Bd-miskins: Miskin comapnies of Bangladesh</title>
            </Head>
            <div className="text-black">
                 <HeaderComp />
            </div>
            <main className="flex-1 overflow-y-auto lg:p-5 p-2">
                <div className="text-center">
                    <section className="text-2xl font-light tracking-widest">Why?</section>
                    <section className="text-justify font-light pt-6 px-6 lg:px-24">Most companies don't evaluate their employees properly. But a few companies cross the HUMANE limit and make the qualification and hard work of the student seem like a joke. This website keeps a track of those shitty companies.
                    </section>
                </div>
            </main>
            <div className="text-center p-4">

                <section className="pl-10 font-light">Creators</section>
                <div className="text-sm lg:text-lg font-light">
                    <section className="inline p-2">Idea >> <a href="mailto:ssaappuurree@gmail.com" className="font-normal">Nahid</a></section>
                    <section className="inline p-2">Code >> <a href="mailto:cozyozzy@tutanota.com" className="font-normal">Laertes</a></section>
                </div>
                <div>
                  <section className="text-md font-light pb-4 pt-6">Want to enlist a company or have any complain? E-mail us<p style={{ color:"#1E3A8A"}} className="font-normal">ssaappuurree@gmail.com</p></section>
                </div>
            </div>
        </div>
    )
}

export default About;

