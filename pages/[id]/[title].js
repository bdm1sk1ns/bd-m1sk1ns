import { useRouter } from 'next/router';

import Items from '../../components/main/main.data';
import Layout from '../../layout/layout'

const CompanyPage = () =>{
    const router = useRouter();
    const {id, title} = router.query;

    return(
        Items.map((item) =>{
            if (String(title).localeCompare(item.title) == 0){
                return(
                    <Layout>
                        <div className="text-center">
                            <section className="text-lg">{item.title}</section>
                            <section className="px-8 lg:px-32 text-justify lg:text-center font-light text-base py-6 text-gray-900">{item.description}</section>
                            <section className="pt-4 text-sm">Circular post</section>
                            <section className="mx-auto pt-6 px-4">
                                <img className="mx-auto" src={item.pocImg} />
                            </section>
                        </div>
                    </Layout>
                )
            }
        })
    )
}

export default CompanyPage;
