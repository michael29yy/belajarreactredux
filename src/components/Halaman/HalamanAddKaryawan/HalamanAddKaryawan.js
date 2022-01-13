import React from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { AddKaryawan } from '../..'

const HalamanAddKaryawan = () => {
    return (
        <div>
            <Layout>
                <Header />
                <AddKaryawan />
                <Footer />
            </Layout>
        </div>
    )
}

export default HalamanAddKaryawan
