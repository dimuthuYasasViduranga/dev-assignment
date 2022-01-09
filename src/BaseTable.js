import React, {useMemo} from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import FilterGobal from "./FilterGobal";

const BaseTable = ({ Columns, bakes }) => {

    const columns = useMemo(() => Columns, [Columns]);
    const data = useMemo(() => bakes, [bakes]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
      },
      useGlobalFilter, useSortBy);

    const { globalFilter } = state;

    return (  
        <>
        <FilterGobal filter={globalFilter} setFilter={setGlobalFilter}/>
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSorted ? '' : '') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    );
}
 
export default BaseTable;