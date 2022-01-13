import {
    GET_LIST_KARYAWAN,
    ADD_KARYAWAN,
    GET_LIST_BIRO,
    GET_LIST_HOBI,
    GET_LIST_TEAM_BIRO,
    DELETE_KARYAWAN,
    DELETE_MULTI_ID,
    DETAIL_KARYAWAN,
    CLEAR_DETAIL
} from '../actions/karyawanAction'

const initialState = {
    getListKaryawanResult: false,
    getListKaryawanLoading: false,
    getListKaryawanError: false,

    getListBiroResult: false,
    getListBiroLoading: false,
    getListBiroError: false,

    getListTeamBiroResult: false,
    getListTeamBiroLoading: false,
    getListTeamBiroError: false,

    getListHobiResult: false,
    getListHobiLoading: false,
    getListHobiError: false,

    addKaryawanResult: false,
    addKaryawanLoading: false,
    addKaryawanError: false,

    deleteKaryawanResult: false,
    deleteKaryawanLoading: false,
    deleteKaryawanError: false,

    deleteMultiIdResult: false,
    deleteMultiIdLoading: false,
    deleteMultiIdError: false,

    getDetailKaryawanResult: false
}

const karyawan = (state = initialState, action) => {
    switch (action.type) {
        //List Karyawan
        case GET_LIST_KARYAWAN:
            return {
                ...state,
                getListKaryawanResult: action.payload.data,
                getListKaryawanLoading: action.payload.loading,
                getListKaryawanError: action.payload.errorMessage
            }

        //List Biro
        case GET_LIST_BIRO:
            return {
                ...state,
                getListBiroResult: action.payload.data,
                getListBiroLoading: action.payload.loading,
                getListBiroError: action.payload.errorMessage
            }

        //List Team Biro
        case GET_LIST_TEAM_BIRO:
            return {
                ...state,
                getListTeamBiroResult: action.payload.data,
                getListTeamBiroLoading: action.payload.loading,
                getListTeamBiroError: action.payload.errorMessage
            }

        //List Hobi
        case GET_LIST_HOBI:
            return {
                ...state,
                getListHobiResult: action.payload.data,
                getListHobiLoading: action.payload.loading,
                getListHobiError: action.payload.errorMessage
            }

        //Add Karyawan
        case ADD_KARYAWAN:
            return {
                ...state,
                addKaryawanResult: action.payload.data,
                addKaryawanLoading: action.payload.loading,
                addKaryawanError: action.payload.errorMessage
            }

        //Delete Karyawan
        case DELETE_KARYAWAN:
            return {
                ...state,
                deleteKaryawanResult: action.payload.data,
                deleteKaryawanLoading: action.payload.loading,
                deleteKaryawanError: action.payload.errorMessage
            }
        //Delete Multi ID
        case DELETE_MULTI_ID:
            return {
                ...state,
                deleteMultiIdResult: action.payload.data,
                deleteMultiIdLoading: action.payload.loading,
                deleteMultiIdError: action.payload.errorMessage
            }
        //Detail Karyawan
        case DETAIL_KARYAWAN:
            return {
                ...state,
                getDetailKaryawanResult: action.payload.data
            }
        //Clear Detail Karyawan
        case CLEAR_DETAIL:
            return {
                getDetailKaryawanResult: false
            }
        default:
            return state;
    }
}

export default karyawan;