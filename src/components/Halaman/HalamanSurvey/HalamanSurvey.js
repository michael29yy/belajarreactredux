import React from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Surveys } from '../..'

const HalamanSurvey = () => {
    return (
        <div>
            <Layout>
                <Header />
                <Surveys />
                <Footer />
            </Layout>
        </div>
    )
}

export default HalamanSurvey
