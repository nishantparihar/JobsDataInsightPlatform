export const columns = [
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


export const columnsYear = [
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