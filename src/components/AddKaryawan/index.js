import React, { useState, useEffect } from 'react'
import { Layout, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addKaryawan, getListBiro, getListTeamBiro } from '../../reducers/actions/karyawanAction';
import {
    CheckCircleOutlined
} from '@ant-design/icons'
//import axios from 'axios';

const AddKaryawan = () => {
    /**
     * Component ANTD
     */
    const { Content } = Layout;

    /**
     * Component File
     */
    const [username, setUsername] = useState('');
    const [nama, setNama] = useState('');
    const [biro, setBiro] = useState('');
    const [teambiro, setTeamBiro] = useState('');
    const [hobi, setHobi] = useState('');
    const [password, setPassword] = useState('');

    const {
        getListBiroResult,
        getListBiroLoading,
        getListBiroError,
        getListTeamBiroResult,
        getListTeamBiroLoading,
        getListTeamBiroError,
    } = useSelector((state) => state.KaryawanReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTambah = (e) => {
        e.preventDefault();
        dispatch(addKaryawan({
            username: username,
            nama: nama,
            biro: biro,
            teambiro: teambiro,
            hobi: hobi,
            password: password
        }));
        notification.open({
            message: 'Data berhasil ditambahkan!!',
            duration: 2,
            icon: <CheckCircleOutlined style={{ color: 'green' }} />,
        });
        navigate("/list");
    }

    useEffect(() => {
        dispatch(getListBiro());
    }, [dispatch])

    useEffect(() => {
        if (biro) {
            dispatch(getListTeamBiro(biro));
        }
    }, [dispatch, biro])

    return (
        <Content className='konten'>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="isi-konten">
                <h3>Halaman Add Karyawan</h3>
                <form className='' onSubmit={handleTambah}>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label>Username : </label>
                            <input
                                required
                                className='form-control'
                                type='text'
                                name='username'
                                placeholder='username...'
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label>Nama : </label>
                            <input
                                required
                                className='form-control'
                                type='text'
                                name='nama'
                                placeholder='nama...'
                                value={nama}
                                onChange={(event) => setNama(event.target.value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label>Biro : </label>
                            <select
                                required
                                className="form-control form-select"
                                type="option"
                                name='biro'
                                placeholder="biro"
                                value={biro}
                                onChange={(e) => {
                                    setBiro(e.target.value)
                                }}
                                style={{ width: 200 }}
                            > <option defaultValue={""}>your biro..</option>
                                {
                                    getListBiroResult ? (
                                        getListBiroResult.map((listbiro) => {
                                            return (
                                                <option key={listbiro.id_biro} value={listbiro.nama_biro}>{listbiro.nama_biro}</option>
                                            )
                                        })) : getListBiroLoading ? (
                                            <option value={"Loading..."}>Loading...</option>
                                        ) : (
                                        <option value="Data Kosong">{getListBiroError ? getListBiroError : "Data Kosong"}</option>
                                    )

                                }
                            </select>
                        </div>
                    </div>
                    {
                        biro ? (
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label>Team : </label>
                                    <select
                                        required
                                        className="form-control form-select"
                                        name='teambiro'
                                        placeholder="team"
                                        value={teambiro}
                                        onChange={(e) => {
                                            setTeamBiro(e.target.value)
                                        }}
                                        style={{ width: 200 }}
                                    > <option defaultValue={""}>your team..</option>
                                        {
                                            getListTeamBiroResult ? (
                                                getListTeamBiroResult.map((ltm) => {
                                                    return (
                                                        <option key={ltm.id_team} value={ltm.nama_team}>{ltm.nama_team}</option>
                                                    )
                                                })
                                            ) : getListTeamBiroLoading ? (
                                                <option value="Loading...">Loading...</option>
                                            ) : (
                                                <option value="Data Kosong">{getListTeamBiroError ? getListTeamBiroError : "Data Kosong"}</option>
                                            )

                                        }
                                    </select>
                                </div>
                            </div>
                        ) : (
                            null
                        )
                    }
                    {biro + " - " + teambiro}
                    <div className="form-group">
                        <div className="form-label-group">
                            <label>Hobi : </label>
                            <input
                                required
                                className='form-control'
                                type='text'
                                name='hobi'
                                placeholder='hobi...'
                                value={hobi}
                                onChange={(event) => setHobi(event.target.value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label-group">
                            <label>Password : </label>
                            <input
                                required
                                className='form-control'
                                type='text'
                                name='password'
                                placeholder='password...'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <div className="form-label-group">
                            <button type='submit' className='btn btn-info'>Add</button>
                            <Link className='btn btn-warning ms-2' to={"/list"}>Kembali</Link>
                        </div>
                    </div>
                </form>
            </div>
        </Content>
    )
}

export default AddKaryawan
