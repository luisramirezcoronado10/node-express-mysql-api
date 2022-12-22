import { pool } from '../db.js'

export const getEmployees = async(req, res) => {
    try {
        // throw new Error('DB NO CONECT')
        const [rows] = await pool.query('select * from employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getEmployeesById = async(req, res) => {
    const employee_id = req.params.id
    const [rows] = await pool.query('select * from employee where id = ?', [employee_id])
    res.json(rows)  
}

export const createEmployee = async(req, res) => {
    const {name, salary} = req.query
    // console.log(employee)
    await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary])
    res.send('Post Success')
}

export const updateEmployee = async (req, res) => {
    const employee_id = req.params.id
    const resultado = await pool.query('update employee set name = ?, salary = ? where id = ?', [req.query.name, req.query.salary, employee_id])
    res.send(resultado)
}

export const deleteEmployee = async (req, res) => {
    const employee_id = req.params.id
    const resultado = await pool.query('delete from employee where id = ?', [employee_id])
    // console.log(resultado)
    res.send(resultado)
}