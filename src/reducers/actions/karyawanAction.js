import axios from 'axios';

export const GET_LIST_KARYAWAN = "GET_LIST_KARYAWAN";
export const GET_LIST_BIRO = "GET_LIST_BIRO";
export const ADD_KARYAWAN = "ADD_KARYAWAN";
export const GET_LIST_HOBI = "GET_LIST_HOBI";
export const GET_LIST_TEAM_BIRO = "GET_LIST_TEAM_BIRO";
export const DELETE_KARYAWAN = "DELETE_KARYAWAN";
export const DELETE_MULTI_ID = "DELETE_MULTI_ID";
export const DETAIL_KARYAWAN = "DETAIL_KARYAWAN";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

//Get List Karyawan
export const getListKaryawan = () => {

    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_KARYAWAN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:8080/karyawan',
            timeout: 6000
        }).then((response) => {
            //berhasil get
            dispatch({
                type: GET_LIST_KARYAWAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: GET_LIST_KARYAWAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Get List Biro
export const getListBiro = () => {

    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_BIRO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:8080/biro',
            timeout: 6000
        }).then((response) => {
            //berhasil get
            dispatch({
                type: GET_LIST_BIRO,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: GET_LIST_BIRO,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Get List Hobi
export const getListHobi = () => {

    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_HOBI,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:8080/Karyawan/hobi_list',
            timeout: 6000
        }).then((response) => {
            //berhasil get
            dispatch({
                type: GET_LIST_HOBI,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: GET_LIST_HOBI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Get List Team Biro
export const getListTeamBiro = (biro) => {

    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_TEAM_BIRO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: `http://localhost:8080/Karyawan/teambiro_list/${biro}`,
            timeout: 6000
        }).then((response) => {
            //berhasil get
            dispatch({
                type: GET_LIST_TEAM_BIRO,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: GET_LIST_TEAM_BIRO,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Add Karyawan
export const addKaryawan = (data) => {
    return (dispatch) => {

        //loading
        dispatch({
            type: ADD_KARYAWAN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:8080/karyawan',
            timeout: 6000,
            data: data
        }).then((response) => {
            //berhasil get
            dispatch({
                type: ADD_KARYAWAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: ADD_KARYAWAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Delete Multi Id Karyawan
export const deleteMultiIdKaryawan = (id) => {
    return (dispatch) => {

        //loading
        dispatch({
            type: DELETE_MULTI_ID,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/Karyawan/delete_multiid/${id}`,
            timeout: 6000,
        }).then((response) => {
            //berhasil get
            dispatch({
                type: DELETE_MULTI_ID,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: DELETE_MULTI_ID,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Delete Karyawan
export const deleteKaryawan = (id) => {
    return (dispatch) => {

        //loading
        dispatch({
            type: DELETE_KARYAWAN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/karyawan/${id}`,
            timeout: 6000,
        }).then((response) => {
            //berhasil get
            dispatch({
                type: DELETE_KARYAWAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            dispatch({
                type: DELETE_KARYAWAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.errorMessage
                }
            })
        })

    }
}

//Detail Karyawan
export const detailKaryawan = (data) => {
    return (dispatch) => {

        dispatch({
            type: DETAIL_KARYAWAN,
            payload: {
                data: data,
            }
        })
    }
}

//Clear Detail Karyawan
export const clearDetailKaryawan = () => {
    return (dispatch) => {

        dispatch({
            type: CLEAR_DETAIL,
        })
    }
}