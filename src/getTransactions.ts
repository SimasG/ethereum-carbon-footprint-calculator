import "dotenv/config";

/*
Fetching array of historical transactions of a given address
**/
export const getTransactions = async () => {
  const response = await fetch(
    `https://api.etherscan.io/api?module=account&action=txlist&address=0x619353127678b95C023530df08BCB638870cFDdA&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.IAQEQUWUR1GGPD1RAFIDPUDNVDNCWUMPBI}`
  );
  const data = await response.json();
  return data;
};
