import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Action
import {
    getListKaryawan,
    getListBiro,
    getListHobi,
    deleteKaryawan,
    getListTeamBiro,
    deleteMultiIdKaryawan,
    detailKaryawan
} from '../../reducers/actions/karyawanAction';
//Intro 
import IntroPage from '../IntroPage/IntroPage';
//Ant D
import {
    Space,
    Table,
    Layout,
    Card,
    Input,
    message,
    Popconfirm,
    Tooltip,
    Form,
    Select,
    Descriptions,
} from 'antd';
//Custom CSS
import './kr.css';
//Icons 
import {
    FileAddOutlined,
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    SearchOutlined
} from '@ant-design/icons'

const Karyawan = () => {

    /**
     * Component ANTD
     */
    const { Content } = Layout;
    const [form] = Form.useForm();
    const { TextArea } = Input;

    //BREAK==============================================================================================BREAK//

    /**
     * Component File Ini
     */

    //Const
    const [selectedData, setSelectedData] = useState('IBO');
    const [searchTabel, setSearchTabel] = useState('');
    const [selectedRow, setSelectedRow] = useState([]);
    //const [clockState, setClockState] = useState();
    const [filteredInfo, setFilteredInfo] = useState(null);
    const [sortedInfo, setSortedInfo] = useState([]);
    //const [showClearAll, setShowClearAll] = useState(false);

    const dispatch = useDispatch();
    const {
        getListKaryawanResult,
        getListBiroResult,
        getListHobiResult,
        getListTeamBiroResult,
        addKaryawanResult,
        deleteKaryawanResult,
        deleteMultiIdResult
    } = useSelector((state) => state.KaryawanReducer);

    //Effect
    useEffect(() => {
        //get Karyawan (action getListKaryawan)
        dispatch(getListKaryawan());
        dispatch(getListBiro());
        dispatch(getListHobi());
    }, [dispatch])

    useEffect(() => {
        if (addKaryawanResult) {
            dispatch(getListKaryawan());
        }
    }, [addKaryawanResult, dispatch])

    useEffect(() => {
        if (deleteKaryawanResult || deleteMultiIdResult) {
            dispatch(getListKaryawan());
        }
    }, [deleteKaryawanResult, deleteMultiIdResult, dispatch])

    useEffect(() => {
        if (selectedData !== '') {
            dispatch(getListTeamBiro(selectedData));
        } else {
            return null
        }
    }, [selectedData, dispatch])

    /* useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []) */

    /* const onCollapse = (noColl) => {
        setColl({noColl});
        console.log(coll);
    }; */

    //Handle
    const handleSearch = (event) => {
        setSearchTabel(event.target.value);
    }

    const handleSelect = (value) => {
        setSelectedData(value);
        console.log('Printed :' + value);
    }

    const handleChangeTable = (pagination, filters, sorter) => {
        console.log('parameter 1', filters);
        console.log('parameter 2', sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
        //setShowClearAll(true);
    }

    const handleClearAll = () => {
        setFilteredInfo(null);
        setSortedInfo(null);
        //setShowClearAll(false);
    }

    /* const handleClear = () => {
        setSelectedData();
        console.log('Cleared, data :' + selectedData);
    } */

    //BREAK==============================================================================================BREAK//

    /**
     * Data Table
     */
    const [tooltip] = useState('Tes ToolTip');

    const rowSelection = {
        selectedRow,
        onChange: (rowKeys) => {
            console.log('selectedRow : ', rowKeys);
            setSelectedRow(rowKeys);
        },
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE
        ],
    }

    const dataDummy = getListTeamBiroResult ? (
        getListTeamBiroResult.map((dd, index) => {
            return (
                {
                    key: dd.id_team,
                    no: index + 1,
                    nama_team: dd.nama_team,
                    adviser: dd.adviser
                }
            )
        })
    ) : (
        null
    )

    const dataSource = getListKaryawanResult ? (
        getListKaryawanResult
            .filter((kryn) => {
                if (searchTabel === "") {
                    return kryn
                } else if (
                    (kryn.username.toLowerCase()).includes(searchTabel.toLowerCase()) ||
                    (kryn.nama.toLowerCase()).includes(searchTabel.toLowerCase()) ||
                    (kryn.biro.toLowerCase()).includes(searchTabel.toLowerCase()) ||
                    (kryn.hobi.toLowerCase()).includes(searchTabel.toLowerCase()) ||
                    (kryn.teambiro.toLowerCase()).includes(searchTabel.toLowerCase()) ||
                    (kryn.password.toLowerCase()).includes(searchTabel.toLowerCase())
                ) {
                    return kryn
                }
                return false;
            })
            .map((kryn, index) => {
                return (
                    {
                        key: kryn.id_kry,
                        id: kryn.id_kry,
                        no: index + 1,
                        username: kryn.username,
                        nama: kryn.nama,
                        biro: kryn.biro,
                        teambiro: kryn.teambiro,
                        hobi: kryn.hobi,
                        password: kryn.password
                    }
                )
            })
    ) : (
        null
    )

    /**
     * Column Table
     */

    const columnsDummy = [
        {
            title: 'No',
            dataIndex: 'no',
            width: '10%',
            align: 'center'
        },
        {
            title: 'Nama Team',
            dataIndex: 'nama_team',
            width: '25%',
            align: 'center'
        },
        {
            title: 'Adviser',
            dataIndex: 'adviser',
            width: '65%',
            align: 'center'
        }
    ]

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            sorter: {
                compare: (a, b) => a.no - b.no,
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === 'no' && sortedInfo.order) : (null),
            responsive: ['lg'],
            width: ['5%'],
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id,
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === 'id' && sortedInfo.order) : (null),
            responsive: ['lg'],
            width: ['5%']
        },
        {
            title: "Username",
            dataIndex: 'username',
            key: 'username',
            sorter: {
                compare: (a, b) => a.username.localeCompare(b.username)
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === "username" && sortedInfo.order) : (null),
            responsive: ['lg'],
            width: ['10%']
        },
        {
            title: "Nama",
            dataIndex: 'nama',
            key: 'nama',
            sorter: {
                compare: (a, b) => a.nama.localeCompare(b.nama),
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === "nama" && sortedInfo.order) : (null),
            responsive: ['lg'],
            width: ['20%']
        },
        {
            title: 'Biro / Team',
            children: [
                {
                    title: "Biro",
                    dataIndex: 'biro',
                    key: 'biro',
                    sorter: {
                        compare: (a, b) => a.biro.localeCompare(b.biro),
                    },
                    sortOrder: sortedInfo ? (sortedInfo.columnKey === "biro" && sortedInfo.order) : (null),
                    filters: getListBiroResult ? (
                        getListBiroResult.map((br) => {
                            return (
                                { text: br.nama_biro, value: br.nama_biro }
                            )
                        })
                    ) : (
                        [{ text: 'No Data', value: 'No Data' }]
                    ),
                    filteredValue: filteredInfo ? (filteredInfo.biro) : (null),
                    filterMode: 'menu',
                    filterSearch: true,
                    onFilter: (value, record) => {
                        return (
                            record.biro.toLowerCase() === value.toLowerCase()
                        )
                    },
                    responsive: ['lg'],
                    width: ['10%']
                },
                {
                    title: "Team",
                    dataIndex: 'teambiro',
                    key: 'teambiro',
                    sorter: {
                        compare: (a, b) => a.teambiro.localeCompare(b.teambiro),
                    },
                    sortOrder: sortedInfo ? (sortedInfo.columnKey === "teambiro" && sortedInfo.order) : (null),
                    responsive: ['lg'],
                    width: ['10%']
                },
            ]
        },
        {
            title: "Hobi",
            dataIndex: 'hobi',
            key: 'hobi',
            sorter: {
                compare: (a, b) => a.hobi.localeCompare(b.hobi),
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === "hobi" && sortedInfo.order) : (null),
            filters: getListHobiResult ? (
                getListHobiResult.map((hb) => {
                    return (
                        { text: hb.hobi, value: hb.hobi }
                    )
                })
            ) : (
                [{ text: 'No Data', value: 'No Data' }]
            ),
            filteredValue: filteredInfo ? (filteredInfo.hobi) : (null),
            filterSearch: true,
            onFilter: (value, record) => {
                return record.hobi.toLowerCase() === value.toLowerCase()
            },
            responsive: ['lg'],
            width: ['10%']
        },
        {
            title: "Password",
            dataIndex: 'password',
            key: 'password',
            sorter: {
                compare: (a, b) => a.password.localeCompare(b.password),
            },
            sortOrder: sortedInfo ? (sortedInfo.columnKey === "password" && sortedInfo.order) : (null),
            className: 'ipass',
            ellipsis: {
                showTitle: false,
            },
            render: (password) => (
                <Tooltip placement="topLeft" title={tooltip}>
                    {password}
                </Tooltip>
            ),
            responsive: ['lg'],
            width: ['15%']
        },
        {
            title: "Aksi",
            dataIndex: 'aksi',
            render: (_, record) => (
                <Space className='d-flex justify-content-center'>
                    <Link className='btn btn-warning iedit' onClick={() => dispatch(detailKaryawan(record))} to={"/edit"}><EditOutlined /></Link>
                    <Popconfirm
                        title={"Apakah anda yakin akan menghapus data id =  " + record.id + " ?"}
                        onConfirm={() => {
                            dispatch(deleteKaryawan(record.key))
                            console.log("Deleted key :" + record.key);
                            setTimeout(() => {
                                message.info("Data berhasil dihapus!!");
                            }, 300);
                        }}>
                        <button className="tomboldelete btn btn-danger ms-3 idelete"><DeleteOutlined /></button>
                    </Popconfirm>
                </Space>
            ),
            responsive: ['lg'],
            align: 'center'
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
    };

    return (
        <div>
            <Content className='konten'>
                <IntroPage toggleSteps={toggleSteps} onExit={onExit} stepsEnabled={stepsEnabled} />
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="isi-konten">
                    <div className='row mb-2'>
                        <div className='col-md-8'>
                        </div>
                        <div className='col-md-4'>
                            <div>
                                <span>Screen ID / / / /</span>
                                <div className='float-end'></div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: "30px" }}>
                        <div className='col-md-3'>
                            <Form
                                layout='horizontal'
                                form={form}
                            >
                                <Form.Item label="Input 1">
                                    <Select
                                        placeholder="Data biro"
                                        showSearch/* 
                                        onSelect={handleSelect} */
                                        onChange={handleSelect}
                                        value={selectedData}
                                        allowClear/* 
                                        onClear={handleClear} */
                                    >
                                        {
                                            getListBiroResult ? (
                                                getListBiroResult.map((br) => {
                                                    return (
                                                        <Select.Option key={br.id_biro} value={br.nama_biro}>{br.id_biro + " - " + br.nama_biro}</Select.Option>
                                                    )
                                                })
                                            ) : (
                                                null
                                            )
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Input 2">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item label="Input 3">
                                    <Input placeholder="input placeholder" allowClear/>
                                </Form.Item>
                                <Form.Item label="Input 4">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='col-md-5'>
                            <Descriptions labelStyle={{ width: '25%', background: '#e6f7ff' }} bordered size='small' title="Deskripsi">
                                <Descriptions.Item label="Deskripsi 1" span={3}>Testing Description 1</Descriptions.Item>
                                <Descriptions.Item label="Deskripsi 2" span={3}>Testing Description 2</Descriptions.Item>
                                <Descriptions.Item label="Deskripsi 3" span={3}>Testing Description 3</Descriptions.Item>
                                <Descriptions.Item label="Deskripsi 4" span={3}>
                                    <TextArea showCount rows={3} maxLength={300} readOnly />
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                        <div className='col-md-4'>
                            <Table
                                className='itabel2 stabel'
                                bordered
                                columns={columnsDummy}
                                dataSource={dataDummy}
                                pagination={{
                                    total: () => dataDummy.length(),
                                    showTotal: (total, range) => `${range[0]}-${range[1]} dari ${total} item`,
                                    defaultPageSize: 3,
                                    position: ["bottomRight"]
                                }}
                                size='small'
                                loading={false}
                                title={() => 'Tabel Input 1'}

                            />
                        </div>
                    </div>
                    <div className="row mb-2 mt-2">
                        <div className='col-md-9'>
                            <button className='ibantu btn btn-warning' onClick={toggleSteps}><b><ExclamationCircleOutlined /> BANTUAN</b></button>
                        </div>
                    </div>
                    <Card className='mt-3' title="Tabel Karyawan" headStyle={{ backgroundColor: '#e6f7ff', textAlign: 'center' }} size='small'>
                        <div className='row mb-2'>
                            <div className='col-md-9'>
                                {/* {
                                    (showClearAll) ? (
                                        <button onClick={handleClearAll} className='btn btn-info mb-2 me-2'>Clear Filters and Sorter</button>
                                    ) : (
                                        null
                                    )
                                } */}
                                <button onClick={handleClearAll} className='btn btn-success me-2'>Clear Filters and Sorter</button>
                            </div>
                            <div className='col-md-3'>
                                <Input
                                    prefix={<SearchOutlined />}
                                    style={{ width: '75%' }}
                                    type="text"
                                    placeholder="search tabel here.."
                                    className="kolompencarian form-control float-end"
                                    onChange={handleSearch}
                                    allowClear
                                />
                            </div>
                        </div>
                        <Table
                            className='itabel'
                            bordered
                            columns={columns}
                            dataSource={dataSource}
                            pagination={{
                                total: () => dataSource.length(),
                                showTotal: (total, range) => `${range[0]}-${range[1]} dari ${total} item`,
                                showSizeChanger: true,
                                defaultPageSize: ["10"],
                                position: ["bottomRight"],
                                pageSizeOptions: ["10", "25", "50", "100"]
                            }}
                            size='small'
                            loading={false}
                            rowSelection={rowSelection}
                            onChange={handleChangeTable}
                        />
                        <div className="row mb-2 mt-3">
                            <div className="col-md-6">
                                {
                                    (selectedRow.length !== 0) ? (
                                        <Popconfirm
                                            title={"Apakah anda yakin akan menghapus " + selectedRow.length + " data yang dipilih?"}
                                            onConfirm={() => {
                                                dispatch(deleteMultiIdKaryawan(selectedRow.toString()))
                                                console.log("Deleted key :" + selectedRow.toString());
                                                setTimeout(() => {
                                                    message.info(selectedRow.length + " Data berhasil dihapus!!");
                                                }, 300);
                                            }}
                                        >
                                            <button className='btn btn-danger me-2'>
                                                <ExclamationCircleOutlined /> Delete all({selectedRow.length})
                                            </button>
                                        </Popconfirm>

                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <div className=" col-md-6">
                                <div className='float-end'>
                                    <Link className="ms-3 btn btn-success itambah" to="/tambah">Tambah Karyawan <FileAddOutlined /></Link>
                                    <button className='btn btn-warning ms-2 ibutton1'><b><ExclamationCircleOutlined /> Button 1</b></button>
                                    <button className='btn btn-danger ms-2 ibutton2'><b><ExclamationCircleOutlined /> Button 2</b></button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Content >
        </div >

    )
}

export default Karyawan