import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import DataTable from 'react-data-table-component';
import { getListKaryawan } from '../../actions/karyawanAction';
import '../Karyawan/kr.css'
import { Space, Table, Layout, Menu, Breadcrumb, Input, Tabs } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { Steps } from 'intro.js-react';

function Karyawan() {

    /**
     * Dummy State
     */
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

    /**
     * Component ANTD
     */
    const { TabPane } = Tabs;
    const { Header, Content, Footer } = Layout;
    const { SubMenu } = Menu;

    const introopt = {
        hideNext: false,
        exitOnOverlayClick: false,
        showStepNumbers: true,
        showBullets: false,
        disableInteraction: true,
        nextLabel: 'Selanjutnya',
        prevLabel: 'Sebelumnya',
        doneLabel: 'Selesai',
    }

    //const [exitOverlay, setExitOverlay] = useState(true);
    const [stepsEnabled, setStepsEnabled] = useState(false);
    const initialStep = 0;
    const steps = [
        {
            element: ".inimenu",
            intro: "Pilih menu di sini"
        },
        {
            element: ".imenu1",
            intro: "Ini menu 1"
        },
        {
            element: ".imenu2",
            intro: "Ini menu 2"
        },
        {
            element: ".imenu3",
            intro: "Ini menu 3",
        },
        {
            element: ".imenu4",
            intro: "Ini menu 4",
        },
        {
            element: ".itabel",
            intro: "Ini Tabel",
            position: "bottom"
        },
        {
            element: ".ipass",
            intro: "Ini Kolom Password",
        },
        {
            element: ".iedit",
            intro: "Ini Edit",
        },
        {
            element: ".idelete",
            intro: "Ini Delete",
        },
        {
            element: ".ibantu",
            intro: "Klik untuk melihat bantuan!",
            position: 'right'
        }
    ];

    const onExit = () => {
        setStepsEnabled(false);
    };

    const toggleSteps = () => {
        setStepsEnabled(true);
        //this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
    };

    const [menu, setMenu] = useState('Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State Pakai State')
    /*const [coll, setColl] = useState(true);
    const [noColl, setNoColl] = useState(false); */

    //const kosong = useState('Data Kosong');

    /**
     * Component File Ini
     */
    const [search, setSearch] = useState('');
    const { getListKaryawanResult, getListKaryawanLoading, getListKaryawanError } = useSelector((state) => state.KaryawanReducer);
    const dispatch = useDispatch();

    const [hobiList, setHobiList] = useState([
    ]);

    const [kryy, setKryy] = useState([]);

    const getHobi = async () => {
        const respon = await axios.get('http://localhost:8080/Karyawan/hobi_list');
        setHobiList(respon.data)
    }

    const getKaryawan = async () => {
        const res = await axios.get('http://localhost:8080/karyawan');
        setKryy(res.data);
    }

    useEffect(() => {
        //get Karyawan (action getListKaryawan)
        dispatch(getListKaryawan());
        getKaryawan();
        getHobi();
    }, [dispatch])

    /* const onCollapse = (noColl) => {
        setColl({noColl});
        console.log(coll);
    }; */

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const biroList = kryy.map((kry) => {
        return (
            {
                key: kry.id_kry,
                biro: kry.biro,
            }
        )
    })

    /**
     * Data Table
     */
    const dataSource = kryy.map((kry, index) => {
        return (
            {
                key: kry.id_kry,
                no: index + 1,
                username: kry.username,
                nama: kry.nama,
                biro: kry.biro,
                teambiro: kry.teambiro,
                hobi: kry.hobi,
                password: kry.password
            }
        )
    })

    /**
     * Column Table
     */

    const i = 1;
    const x = 10;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id_kry',
        },
        {
            title: "Username",
            dataIndex: 'username',
        },
        {
            title: "Nama",
            dataIndex: 'nama',
        },
        {
            title: "Biro",
            dataIndex: 'biro',
        },
        {
            title: "Team",
            dataIndex: 'teambiro',
        },
        {
            title: "Hobi",
            dataIndex: 'hobi',
            filters: hobiList.map((hb) => {
                return (
                    { text: hb.hobi, value: hb.hobi }
                )
            }),
            filterMode: 'tree',
            onFilter: (value, record) => {
                return record.hobi.toLowerCase() === value.toLowerCase()
            }
        },
        {
            title: "Password",
            dataIndex: 'password',
            className: 'ipass',
        },
        {
            title: "Aksi",
            dataIndex: 'aksi',
            render: () => (
                <Space>
                    <div>
                        <button className="tomboledit btn btn-warning iedit">Edit</button>
                        <button className="tomboldelete btn btn-danger ms-3 idelete">Delete</button>
                    </div>
                </Space>
            )
        }
    ]

    return (
        <div className=''>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
                options={introopt}
            />
            <Layout className="layout" >
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
                <Content className='konten'>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="isi-konten">
                        <div className="row mb-2 mt-2">
                            <div className=" col-md-9">
                                <button className='ibantu btn btn-warning' onClick={toggleSteps}><b>BANTUAN</b></button>
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    placeholder="search here.."
                                    className="kolompencarian form-control"
                                />
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header text-center bg-info'>
                                <span>Tabel Karyawan</span>
                            </div>
                            <div className='card-body'>
                                <Table
                                    className='itabel'
                                    rowKey={record => record.id_kry}
                                    bordered
                                    columns={columns}
                                    dataSource={getListKaryawanResult}
                                    pagination={{
                                        className: 'ipage',
                                        pageSize: 6
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Content>
                {/* <div className='footer'>Testing</div> */}
                <Footer style=
                    {{
                        textAlign: 'right',
                        background: '#4dacfa',
                        padding: '10px 20px'
                    }}
                >Copyright?_?_?@2999
                </Footer>
            </Layout>
            {/* <div className="row mb-2 mt-2">
                <div className=" col-md-9">
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="search here.."
                        className="kolompencarian form-control"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <span>Tabel Karyawan</span>
                </div>
                <div className='card-body'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={getListKaryawanResult}
                        pagination={{
                            pageSize: 6
                        }}
                    />
                </div>
            </div>

             <div className='table-responsive'>
                <table id="tabelkry" className="tabeldata table table-bordered table-striped table-hover table-sm">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>Nama</th>
                            <th>Biro</th>
                            <th>Team</th>
                            <th>Hobi</th>
                            <th>Password</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tfoot style={{ textAlign: "center" }}>
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>Nama</th>
                            <th>Biro</th>
                            <th>Team</th>
                            <th>Hobi</th>
                            <th>Password</th>
                            <th>Aksi</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            getListKaryawanResult ? (
                                getListKaryawanResult
                                    .filter((kryn) => {
                                        if (
                                            (kryn.username.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.nama.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.biro.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.hobi.toLowerCase()).includes(search.toLowerCase())
                                        ) {
                                            return kryn
                                        }else {
                                            return false;
                                        }
                                    }).map((kryn, index) => {
                                        return (
                                            <tr key={kryn.id_kry}>
                                                <td>{index + 1}</td>
                                                <td>{kryn.username}</td>
                                                <td>{kryn.nama}</td>
                                                <td>{kryn.biro}</td>
                                                <td>{kryn.teambiro}</td>
                                                <td>{kryn.hobi}</td>
                                                <td>{kryn.password}</td>
                                                <td className='text-center'>
                                                    <button className="tomboledit btn btn-warning">Edit</button>
                                                    <button className="tomboldelete btn btn-danger ms-3">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                            ) : getListKaryawanLoading ? (
                                <tr>
                                    <td colSpan={"8"}>Data Loading...</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan={"8"}>{getListKaryawanError ? getListKaryawanError : "Data Kosong"}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>  */}
        </div>

    )
}

export default Karyawan