import { Input, Image, Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HalamanLogin.css';
import logo from '../../../img/bg-ormis.jpg';

const HalamanLogin = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/list');
    };

    return (
        <div className='container d-flex flex-column min-vh-100 justify-content-center align-content-center'>
            <Card bordered={false}>
                <div className='row'>
                    <div className='col-md-6'>
                        <Image src={logo} alt='logo' preview={false} />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-content-center'>
                        <h4 className='text-center'>Login Page</h4>
                        <form onSubmit={onFinish}>
                            <div className="form-floating mb-3">
                                <Input
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Username"
                                    required
                                />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    required
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className='form-group'>
                                <button className='btn btn-primary form-control'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HalamanLogin

