import { findCustomersQuery } from './customer.repository';


export const getCustomersQuery = async () => {
  return await findCustomersQuery();
};
