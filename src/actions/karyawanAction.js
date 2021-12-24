import axios from 'axios';

export const GET_LIST_KARYAWAN = "GET_LIST_KARYAWAN";

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
            console.log(response.data);
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