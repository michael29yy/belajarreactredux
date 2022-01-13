import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Transfer } from 'antd';

const DummyFile = () => {

    const { Content } = Layout;

    const [mockData, setMockData] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);

    const getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        setTargetKeys(targetKeys);
        setMockData(mockData);
    }

    const handleChange = (targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
        setTargetKeys(targetKeys);
    };

    const renderItem = (item) => {
        const customLabel = (
            <span className="custom-item">
                {item.title} - {item.description}
            </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    useEffect(() => {
        getMock()
    }, [])

    return (
        <Content className='konten'>
            <div className="isi-konten">
                <h3>Halaman DUA</h3>
                <Transfer
                    dataSource={mockData}
                    listStyle={{
                        width: 500,
                        height: 300,
                    }}
                    targetKeys={targetKeys}
                    onChange={handleChange}
                    render={renderItem}
                    showSearch
                />
                <Link to={"/list"} className='btn btn-warning'>Kembali</Link>
            </div>
        </Content>
    )
}

export default DummyFile
