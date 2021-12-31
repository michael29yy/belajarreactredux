import React, {useState} from 'react';
import { Layout, Menu, Input, Tabs } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';

//css
import './Header.css'

const Header = () => {

    /**
     * Component Antd
     */
    const { TabPane } = Tabs;
    const { SubMenu } = Menu;
    const { Header } = Layout;

    /**
    * Dummy State
    */
    const [menu, setMenu] = useState('Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State');
    const [dum1, setDum1] = useState([
        { id: 1, nama: 'RCSA RCSA RCSA RCSA RCSA 1' },
        { id: 2, nama: 'RCSA RCSA RCSA RCSA RCSA 2' },
        { id: 3, nama: 'RCSA RCSA RCSA RCSA RCSA 3' },
        { id: 4, nama: 'RCSA RCSA RCSA RCSA RCSA 4' },
        { id: 5, nama: 'RCSA RCSA RCSA RCSA RCSA 5' },
        { id: 6, nama: 'RCSA RCSA RCSA RCSA RCSA 6' },
        { id: 7, nama: 'RCSA RCSA RCSA RCSA RCSA 7' },
        { id: 8, nama: 'RCSA RCSA RCSA RCSA RCSA 8' },
        { id: 9, nama: 'RCSA RCSA RCSA RCSA RCSA 9' },
        { id: 10, nama: 'RCSA RCSA RCSA RCSA RCSA 10' },
        { id: 11, nama: 'RCSA RCSA RCSA RCSA RCSA 11' },
        { id: 12, nama: 'RCSA RCSA RCSA RCSA RCSA 12' },
        { id: 13, nama: 'RCSA RCSA RCSA RCSA RCSA 13' },
        { id: 14, nama: 'RCSA RCSA RCSA RCSA RCSA 14' },
        { id: 15, nama: 'RCSA RCSA RCSA RCSA RCSA 15' }

    ]);
    const [dum2, setDum2] = useState([
        { id: 1, nama: 'LED 1' },
        { id: 2, nama: 'LED 2' },
        { id: 3, nama: 'LED 3' },
        { id: 4, nama: 'LED 4' },
        { id: 5, nama: 'LED 5' },
        { id: 6, nama: 'LED 6' },
        { id: 7, nama: 'LED 7' },
        { id: 8, nama: 'LED 8' },
        { id: 9, nama: 'LED 9' },
        { id: 10, nama: 'LED 10' },
        { id: 11, nama: 'LED 11' }
    ]);
    const [dum3, setDum3] = useState([
        { id: 1, nama: 'KRI 1' },
        { id: 2, nama: 'KRI 2' },
        { id: 3, nama: 'KRI 3' },
        { id: 4, nama: 'KRI 4' },
        { id: 5, nama: 'KRI 5' },
        { id: 6, nama: 'KRI 6' },
        { id: 7, nama: 'KRI 7' },
        { id: 8, nama: 'KRI 8' },
        { id: 9, nama: 'KRI 9' },
        { id: 10, nama: 'KRI 10' },
        { id: 11, nama: 'KRI 11' },
        { id: 12, nama: 'KRI 12' }
    ]);

    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0' }}>
                <Menu
                    className='text-center inimenu'
                    mode="horizontal"
                    style={{ backgroundColor: '#4dacfa', color: 'black' }}
                >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Reports" className='imenu1'>
                        <div className='menureports'>
                            <Tabs defaultActiveKey="mrcsa" centered style={{ background: '#fff' }}>
                                <TabPane tab="RCSA" key="mrcsa" tabKey='tab1'>
                                    <Input
                                        onChange={handleSearch}
                                        className='ms-4 mt-2'
                                        placeholder="Cari menu RCSA"
                                        allowClear
                                        style={{ width: 200 }}
                                    />
                                    <div className='mt-3 ms-2' style={{ color: 'black' }}>
                                        {
                                            dum1
                                                .filter((rcsa) => {
                                                    if (
                                                        (rcsa.nama.toLowerCase()).includes(search.toLowerCase())
                                                    ) {
                                                        return rcsa
                                                    }
                                                    return false
                                                })
                                                .map((rcsa, index) => {
                                                    return (
                                                        <Menu.Item key={index + 25} eventKey={index + 25}>{rcsa.nama}</Menu.Item>
                                                    )
                                                })
                                        }
                                    </div>
                                </TabPane>
                                <TabPane tab="LED" key="mled" tabKey='tab2'>
                                    <Input onChange={handleSearch}
                                        className='ms-4 mt-2'
                                        placeholder="Cari menu LED"
                                        allowClear
                                        style={{ width: 200 }}
                                    />
                                    <div className='mt-3 ms-2' style={{ color: 'black' }}>
                                        {
                                            dum2
                                                .filter((led) => {
                                                    if (
                                                        (led.nama.toLowerCase()).includes(search.toLowerCase())
                                                    ) {
                                                        return led
                                                    }
                                                    return false
                                                })
                                                .map((led, index) => {
                                                    return (
                                                        <Menu.Item key={index + 35} eventKey={index + 35}>{led.nama}</Menu.Item>
                                                    )
                                                })
                                        }
                                    </div>
                                </TabPane>
                                <TabPane tab="KRI" key="mkri" tabKey='tab3'>
                                    <Input onChange={handleSearch}
                                        className='ms-4 mt-2'
                                        placeholder="Cari menu KRI"
                                        allowClear
                                        style={{ width: 200 }}
                                    />
                                    <div className='mt-3 ms-2' style={{ color: 'black' }}>
                                        {
                                            dum3
                                                .filter((kri) => {
                                                    if (
                                                        (kri.nama.toLowerCase()).includes(search.toLowerCase())
                                                    ) {
                                                        return kri
                                                    }
                                                    return false
                                                })
                                                .map((kri, index) => {
                                                    return (
                                                        <Menu.Item key={index + 45} eventKey={index + 45}>{kri.nama}</Menu.Item>
                                                    )
                                                })
                                        }
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Menu 2" className='imenu2'>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub2_1" icon={<SettingOutlined />} title={menu}>
                            <SubMenu key="sub2_1_1" icon={<SettingOutlined />} title="Submenu 2.1">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<SettingOutlined />} title="Menu 3" className='imenu3'>
                        <Menu.Item key="13">Option 13</Menu.Item>
                        <Menu.Item key="14">Option 14</Menu.Item>
                        <Menu.Item key="15">Option 15</Menu.Item>
                        <Menu.Item key="16">Option 16</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Menu 4" className='imenu4'>
                        <Menu.Item key="17">Option 17</Menu.Item>
                        <SubMenu key="sub4_1" icon={<SettingOutlined />} title="Submenu4">
                            <Menu.Item key="18">Option 18</Menu.Item>
                            <Menu.Item key="19">Option 19</Menu.Item>
                            <Menu.Item key="20">Option 20</Menu.Item>
                            <Menu.Item key="21">Option 21</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="22">Option 22</Menu.Item>
                        <Menu.Item key="23">Option 23</Menu.Item>
                        <Menu.Item key="24">Option 24</Menu.Item>
                        <SubMenu key="sub4_2" icon={<SettingOutlined />} title="Submenu4">
                            <Menu.Item key="25">Option 25</Menu.Item>
                            <Menu.Item key="26">Option 26</Menu.Item>
                            <Menu.Item key="27">Option 27</Menu.Item>
                            <Menu.Item key="28">Option 28</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Header>
        </div>
    )
}

export default Header
