import React, { useState, useRef } from 'react';
import { Layout, Menu, Input, Tabs, Affix } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import IdleTimer from 'react-idle-timer'

//css
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import IdleModal from '../Modal/IdleModal';

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
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const [menu] = useState('Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State');
    const [dum1] = useState([
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
    const [dum2] = useState([
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
    const [dum3] = useState([
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
    const idleTimerRef = useRef(null);

    const onIdle = () => {
        console.log("user is idle");
        console.log(idleTimerRef);
        setShowModal(true)
    }

    const handleOk = () => {
        setShowModal(false)
        navigate('/');

    }

    const handleCancel = () => {
        setShowModal(false)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <Affix offsetTop={0}>
            <div>
                <IdleTimer ref={idleTimerRef} timeout={1 * 60000} onIdle={onIdle}></IdleTimer>
                <IdleModal handleOk={handleOk} handleCancel={handleCancel} showModal={showModal} />
                <Header style={{ padding: '0' }}>
                    {/* <div className='logo'><Link className='' to={"/"}>Home</Link></div> */}
                    <Menu
                        className='text-center inimenu'
                        mode="horizontal"
                        style={{ backgroundColor: '#4dacfa' }}
                    >
                        <Menu.Item key="home"><Link className='' to={"/"}>Home</Link></Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Reports" className='imenu1'>
                            <div className='menureports'>
                                <Tabs defaultActiveKey="mrcsa" centered style={{ background: '#fff' }}>
                                    <TabPane tab="RCSA" key="mrcsa">
                                        <Input
                                            onChange={handleSearch}
                                            className='ms-4 mt-2'
                                            placeholder="Cari menu RCSA"
                                            allowClear
                                            style={{ width: 200 }}
                                        />
                                        <div className='mt-3 ms-2' style={{ color: 'black' }} key={'mrcsa2'}>
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
                                                            <ul key={index + 97}>
                                                                <li><Link to={"/tambah"}>{rcsa.nama}</Link></li>
                                                            </ul>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </TabPane>
                                    <TabPane tab="LED" key="mled" >
                                        <Input onChange={handleSearch}
                                            className='ms-4 mt-2'
                                            placeholder="Cari menu LED"
                                            allowClear
                                            style={{ width: 200 }}
                                        />
                                        <div className='mt-3 ms-2' style={{ color: 'black' }} key={'mled2'}>
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
                                                            <ul key={index + 98}>
                                                                <li><Link to={"/"}>{led.nama}</Link></li>
                                                            </ul>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </TabPane>
                                    <TabPane tab="KRI" key="mkri" >
                                        <Input onChange={handleSearch}
                                            className='ms-4 mt-2'
                                            placeholder="Cari menu KRI"
                                            allowClear
                                            style={{ width: 200 }}
                                        />
                                        <div className='mt-3 ms-2' style={{ color: 'black' }} key={'mkri2'}>
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
                                                            <ul key={index + 99}>
                                                                <li><Link to={"/"}>{kri.nama}</Link></li>
                                                            </ul>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Menu 2" className='imenu2'>
                            <Menu.Item key="5">Testing</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub2_1" icon={<SettingOutlined />} title={menu}>
                                <SubMenu key="sub2_1_1" icon={<SettingOutlined />} title="Submenu 2.1">
                                    <Menu.Item key="9"><Link to="/halaman2">Halaman 2</Link></Menu.Item>
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
                                <Menu.Item key="18"><Link to="/tambah">Halaman Tambah</Link></Menu.Item>
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
                        <Menu.Item key={'survey'}><Link className='' to={"/HalamanSurvey"}>KRI? LED?</Link></Menu.Item>
                    </Menu>
                </Header>
            </div >
        </Affix>
    )
}

export default Header
