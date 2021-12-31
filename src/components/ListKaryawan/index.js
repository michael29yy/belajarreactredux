import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKaryawan } from '../../actions/karyawanAction';
import { Space, Table, Layout, Breadcrumb } from 'antd';
import axios from 'axios';
import './kr.css';
import IntroPage from '../IntroPage/IntroPage';

function Karyawan() {

    /**
     * Component ANTD
     */
    const { Content } = Layout;

    //BREAK==============================================================================================BREAK//

    /**
     * Component File Ini
     */
    //const [search, setSearch] = useState('');
    const { getListKaryawanResult, getListKaryawanLoading, getListKaryawanError } = useSelector((state) => state.KaryawanReducer);
    const dispatch = useDispatch();
    const [hobiList, setHobiList] = useState([]);
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

    /* const handleSearch = (event) => {
        setSearch(event.target.value);
    } */

    //BREAK==============================================================================================BREAK//

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

    //BREAK==============================================================================================BREAK//

    /**
     * Intro Page
     */
    const [stepsEnabled, setStepsEnabled] = useState(false);

    const onExit = () => {
        setStepsEnabled(false);
    };

    const toggleSteps = () => {
        setStepsEnabled(true);
        //this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
    };

    return (
        <div>
            <IntroPage toggleSteps={toggleSteps} onExit={onExit} stepsEnabled={stepsEnabled}/>
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