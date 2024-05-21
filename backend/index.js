const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sql = require('mssql');
const config = require('./databaseConnection')

dotenv.config()
const app = express();

app.use(cors());

app.get('/api/basictable', async (req, res)=>{

    try {
        const poolConnection = await sql.connect(config);

        const resultSet = await poolConnection.request().query(`SELECT 
        [work_year] AS Year,
        COUNT(*) AS Total_Jobs,
        AVG([salary_in_usd]) AS Average_Salary_USD
        FROM 
        [dbo].[salaries]
        GROUP BY 
        [work_year]
        ORDER BY 
        [work_year]`);

        poolConnection.close();
        return res.status(200).json(resultSet.recordset);

    } catch (err) {
        res.status(404).json({
            msg: err.message
        })
    }

})



app.get("/api/analytics/:year", async (req, res)=>{
    const year = req.params.year;

    try {
        const poolConnection = await sql.connect(config);

        const resultSet = await poolConnection.request().query(`SELECT 
        [job_title],
        COUNT(*) AS Job_Count
        FROM 
            [dbo].[salaries]
        WHERE 
            [work_year] = ${year}  -- Replace 2022 with the selected year
        GROUP BY 
            [job_title]
        ORDER BY 
        Job_Count DESC;`);

        poolConnection.close();
        return res.status(202).json(resultSet.recordset);

    } catch (err) {
        res.status(404).json({
            msg: err.message
        })
    }

})



app.listen(3000);