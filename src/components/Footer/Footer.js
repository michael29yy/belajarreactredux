import React from 'react';
import { Layout, Affix } from 'antd';

const Footer = () => {
    const { Footer } = Layout;
    return (
        <Affix offsetBottom={0}>
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
        </Affix>
    )
}

export default Footer
