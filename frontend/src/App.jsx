import { useEffect, useState } from 'react'
import { Table } from "antd";
import { Modal, Spin } from "antd";
import { columns, columnsYear } from './dataColumns';

import './App.css'
import axios from 'axios';
import LineGraph from './LineGraph';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [year, setYear] = useState(null);


  useEffect(()=>{
        try{

          axios.get(`${import.meta.env.VITE_Server}api/basictable`)
          .then((res)=>{
              setData(res.data);
          })

        }catch(e){
            console.log(e);
        }
  }, [])


  useEffect(()=>{
    try{

      axios.get(`${import.meta.env.VITE_Server}api/analytics/${year}`)
      .then((res)=>{
          setYearData(res.data);
      })

    }catch(e){
        console.log(e);
    }
  }, [year])
  
  
  const onRowClick = (r, i) => {
    return {onClick: () => showModal(r.Year)}
  };
  const showModal = (year) => {
    setYear(year);
    setIsModalOpen(true);
  };
  const handleOk = () => {

    setYearData([]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
 
    setYearData([]);
    setIsModalOpen(false);
  };

  return (
    <>
        <Spin tip="Fetching Data..." spinning = {!data.length}>
            <Table title={()=> <div style={{fontSize:'20px', fontFamily:'sans-serif', fontWeight:'bold'}}>ML Engineer Salaries</div>} id='table' onRow={onRowClick} pagination={false} bordered rowHoverable sticky dataSource={data} columns={columns} />
        </Spin>

        <Modal title={`Year ${year}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}>
            <Spin tip="Fetching Data..." spinning = {!yearData.length}>
                <Table bordered size='small' pagination={false} scroll={{ y: 400 }} rowHoverable sticky dataSource={yearData} columns={columnsYear} />
            </Spin>
        </Modal>

        <LineGraph data={data} />
    </>
  )
}

export default App
