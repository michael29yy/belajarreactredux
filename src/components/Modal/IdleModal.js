import React from 'react'
import { Affix, Modal } from 'antd'

const IdleModal = ({ handleOk, handleCancel, showModal }) => {
    return (
        <Affix offsetTop={0}>
            <Modal
                visible={showModal}
                footer={null}
                closable={false}
                maskTransitionName=""
            >
                <p>User is idle...</p>
                <button className='btn btn-danger me-2' onClick={handleOk}>Log out</button>
                <button className='btn btn-warning' onClick={handleCancel}>Stay alive</button>
            </Modal>
        </Affix>

    )
}

export default IdleModal
