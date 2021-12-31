import React from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { ListKaryawan } from '../..'

function HalamanKaryawan() {
    return (
        <div>
            <Layout>
                <Header />
                <ListKaryawan />
                <Footer />
            </Layout>
        </div>
    )
}

export default HalamanKaryawan
