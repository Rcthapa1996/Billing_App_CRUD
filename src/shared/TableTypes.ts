interface TableDataType {
  title: string;
  description: string;
  published: boolean;
  id?: number;
}

interface DetailsDataType {
  id: number;
  dateOfIssue: string;
  principal: number;
  rate: number;
  totalIntrest: number;
  totalAmount: number;
}

interface TablePropsType {
  data: TableDataType[] | DetailsDataType[] | any[];
  config: any[];
  isLoading?: boolean;
}

interface TableConfigType {
  header: string;
  key: string;
  data?: string[];
  width?: string;
  render?: any;
}

export { TableDataType, TablePropsType, TableConfigType, DetailsDataType };
