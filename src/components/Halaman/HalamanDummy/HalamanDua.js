import React from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { DummyHal } from '../..'

const HalamanDua = () => {
    return (
        <div>
            <Layout>
                <Header />
                <DummyHal />
                <Footer />
            </Layout>
        </div>
    )
}

export default HalamanDua
