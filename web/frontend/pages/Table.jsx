import {
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
} from '@shopify/polaris';
import { React, useState, useEffect } from "react";

export default function Table() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data);

  const datos= data.length > 0?data:[];
  console.log(datos);


  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(datos);

  const rowMarkup = datos.map(
    ({id, username}, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation="strong">{id}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{username}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={data.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Id'},
          {title: 'Usuario'}
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}