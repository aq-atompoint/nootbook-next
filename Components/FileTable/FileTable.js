import { StylesContext } from "@material-ui/styles";
import React from "react";
import { useTable, useRowSelect } from "react-table";
import sampleData from "./data.json";
import { useStyles } from "./FileTable.style";

// eslint-disable-next-line react/display-name
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const FileTable = () => {
  const styles = useStyles();

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      selectedFlatRows,
      state: { selectedRowIds },
    } = useTable(
      {
        columns,
        data,
      },
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: "selection",
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
      }
    );

    // Render the UI for your table
    return (
      <>
        <table {...getTableProps()} className={styles.tableRoot}>
          <thead className={styles.tableHeader}>
            {headerGroups.map((headerGroup, index) => (
              <tr key={`cell${index}`} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    className={styles.tableHeadeCell}
                    key={`cell${index}`}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.slice(0, 25).map((row, i) => {
              prepareRow(row);
              return (
                <tr key={`cell${i}`} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        className={styles.dataCell}
                        key={`cell-${index}`}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }

  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <>
            <span>
              <img src="https://i.imgur.com/82yLPV6.png" alt="path Image" />
            </span>
          </>
        ),
        accessor: "path",
        Cell: (tableProps) => (
          <img src={tableProps.row.original.path} width={60} alt="Player" />
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Last Modifed",
        accessor: "lastModified",
      },
      {
        Header: "File Size",
        accessor: "filzeSize",
      },
    ],
    []
  );

  const data = React.useMemo(() => sampleData, []);

  return <Table columns={columns} data={data} />;
};

export default FileTable;
