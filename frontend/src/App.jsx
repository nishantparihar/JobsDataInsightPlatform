import { useEffect, useState } from 'react'
import { Table } from "antd";
import { Modal, Spin } from "antd";


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

          axios.get("http://localhost:3000/api/basictable")
          .then((res)=>{
              setData(res.data);
          })

        }catch(e){
            console.log(e);
        }
  }, [])


  useEffect(()=>{
    try{

      axios.get(`http://localhost:3000/api/analytics/${year}`)
      .then((res)=>{
          setYearData(res.data);
      })

    }catch(e){
        console.log(e);
    }
}, [year])
  
  const columns = [
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: 'Total Jobs',
      dataIndex: 'Total_Jobs',
      key: 'Total_Jobs',
      sorter: (a, b) => a.Total_Jobs - b.Total_Jobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'Average_Salary_USD',
      key: 'Average_Salary_USD',
      sorter: (a, b) => a.Average_Salary_USD - b.Average_Salary_USD,
    },
  ];

  const columnsYear = [
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      key: 'job_title',
    },
    {
      title: 'Job Count',
      dataIndex: 'Job_Count',
      key: 'Job_Count',
      sorter: (a, b) => a.Job_Count - b.Job_Count,
    },
  ];
  
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
