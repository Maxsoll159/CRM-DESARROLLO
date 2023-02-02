"use client"

import DataTable from 'react-data-table-component';
import React from 'react'
import { FilterComponent } from './components/FilterComponent';

export default function TheDataTable({data,columns}:{data:any,columns:any}) 
{
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

		return <FilterComponent onFilter={(e:any) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
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
       selectableRows
       persistTableHead
       />
    </>
  );
}
