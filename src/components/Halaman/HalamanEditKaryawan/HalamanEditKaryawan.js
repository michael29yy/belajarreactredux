import React from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { EditKaryawan } from '../..'

const HalamanEditKaryawan = () => {
    return (
        <div>
            <Layout>
                <Header />
                <EditKaryawan />
                <Footer />
            </Layout>
        </div>
    )
}

export default HalamanEditKaryawan
