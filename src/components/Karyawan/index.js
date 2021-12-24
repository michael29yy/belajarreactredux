import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKaryawan } from '../../actions/karyawanAction';

function Karyawan() {
    //const kosong = useState('Data Kosong');
    const [search, setSearch] = useState('');
    const { getListKaryawanResult, getListKaryawanLoading, getListKaryawanError } = useSelector((state) => state.KaryawanReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        //get Karyawan (action getListKaryawan)
        dispatch(getListKaryawan());
    }, [dispatch])

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className='container '>
            <div className="row mb-2 mt-2">
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
                    <tbody>
                        {
                            getListKaryawanResult ? (
                                getListKaryawanResult
                                    .filter((kryn) => {
                                        if (search === "") {
                                            return kryn
                                        } else if (
                                            (kryn.username.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.nama.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.biro.toLowerCase()).includes(search.toLowerCase()) ||
                                            (kryn.hobi.toLowerCase()).includes(search.toLowerCase())
                                        ) {
                                            return kryn
                                        } else if (search.match('kosong')) {
                                            console.log("kosong")
                                            return (
                                                kryn
                                            )
                                        }
                                        return false;
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
                                    <td>Data Loading</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan={"8"}>{getListKaryawanError ? getListKaryawanError : "Data Kosong"}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Karyawan