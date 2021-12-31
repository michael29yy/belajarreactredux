import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
    const { Footer } = Layout;
    return (
        <div>
            <Footer style=
                {{
                    textAlign: 'right',
                    background: '#4dacfa',
                    padding: '10px 20px'
                }}
            >Copyright?_?_?@2999
            </Footer>
        </div>
    )
}

export default Footer
