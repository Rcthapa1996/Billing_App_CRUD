// Types
import { TableDataType, TablePropsType, TableConfigType } from "./TableTypes";

// Styles
import "./TableStyles.modules.scss";

const TableHeader = ({ config }: { config: TableConfigType[] }) => {
  return (
    <thead>
      <tr>
        {config.map(({ header, width }) => (
          <th style={{ minWidth: width }}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

const TableData = ({
  id,
  dataProp,
  render,
  data
}: {
  id: string;
  dataProp: string[];
  render: any;
  data: TableDataType;
}) => {
  if (render) return <td>{render(data[id])}</td>;
  return <td>{data[id]}</td>;
};

const NoData = ({ colSpan }) => (
  <tbody>
    <td colSpan={colSpan}>NoData</td>
  </tbody>
);

const TableBody = ({
  allData,
  config
}: {
  allData: TableDataType[];
  config: TableConfigType[];
}) => {
  return (
    <tbody>
      {allData.map((data) => (
        <tr key={data.id}>
          {config.map(({ key, data: dataProp, render }) => (
            <TableData
              id={key}
              dataProp={dataProp}
              render={render}
              data={data}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ data, config, isLoading = false }: TablePropsType) => {
  if (isLoading) return <h1>isLoading...</h1>;
  return (
    <table>
      <TableHeader config={config} />
      {data.length ? (
        <TableBody allData={data} config={config} />
      ) : (
        <NoData colSpan={config.length} />
      )}
    </table>
  );
};

export default Table;
