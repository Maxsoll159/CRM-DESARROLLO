"use client"

import DataTable from 'react-data-table-component';
import React, { ReactElement } from 'react'
import { FilterComponent } from './components/FilterComponent';

interface props
{
  data:any;
  columns:any;
  conditionalStyles?:any;
  styles?:any;
  buttons?:ReactElement<any, any>;
}

export default function TheDataTable(props:props) 
{
  const
  {
    data,
    columns,
    conditionalStyles,
    styles,
    buttons
  }=props

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = data.filter(
		(item: any) => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1,
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
      <div className='flex w-[100%] justify-between'>
        <FilterComponent
          onFilter={(e: any) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        {
          buttons
        }
      </div>
    ); 
	}, [filterText, resetPaginationToggle]);


  return (
    <>
      <DataTable 
       columns={columns} 
       data={filteredItems} 
       pagination
       paginationResetDefaultPage={resetPaginationToggle}
       subHeader
       subHeaderComponent={subHeaderComponentMemo}
       conditionalRowStyles={conditionalStyles}
       customStyles={styles}
       selectableRows
       persistTableHead
       />
    </>
  );
}

