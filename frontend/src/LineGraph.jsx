import { Line } from '@ant-design/charts';
import { Button, Modal, Spin } from 'antd';
import { useEffect, useState } from 'react'


export default function LineGraph({data}){

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const config = {
        data,
        width: 600,
        height: 400,
        xField: 'Year',
        yField: 'Total_Jobs',
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(

        <>
            <Button onClick={showModal} style={{marginTop:"10px"}} >Show Line Graph</Button>

            <Modal title={`Line Graph`} width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}>
                <Spin tip="Fetching Data..." spinning = {!data.length}>
                    <Line {...config} />
                </Spin>
            </Modal>
        </>
        
        
        // 
    )
}