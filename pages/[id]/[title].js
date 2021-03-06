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
                    <div>{item.title}</div>
                    </Layout>
                )
            }
        })
    )
}

export default CompanyPage;