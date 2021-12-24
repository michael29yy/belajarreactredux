import { GET_LIST_KARYAWAN } from '../../actions/karyawanAction'

const initialState = {
    getListKaryawanResult: false,
    getListKaryawanLoading: false,
    getListKaryawanError: false
}

const karyawan = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KARYAWAN:
            return{
                ...state,
                getListKaryawanResult: action.payload.data,
                getListKaryawanLoading: action.payload.loading,
                getListKaryawanError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default karyawan;