import ErrClassific_Mock from '../constants/Errclassific_MockData.json'
import {Errclassific_Columns} from '../constants/Errclassific_Columns'
import  {useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../constants/MOCK_DATA.json'
import {COLUMNS} from '../constants/Columns'
import {React, useEffect,useReducer,useState} from "react";



const First_table = () =>{

const columns = useMemo(() => COLUMNS, [])
const data = useMemo(() => MOCK_DATA, []);
const tableInstance = useTable({
    columns,
    data
})
const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = tableInstance

return(<>
   <div className = "scroll-table">   
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}> 
                          {column.render('Header')}
                       </th>
                    ))}
                </tr>
            ))}
        </thead>
        </table>
        </div>
        <div class="scroll-table-body">
        <table>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                 prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                       {row.cells.map((cell) => {
                         return <td {...cell.getCellProps()}>
                          {cell.render('Cell')}</td>
                            })}
                    </tr>
                    )
                })
            }
        </tbody>
        </table>
        </div>

</>)
}
export default First_table
