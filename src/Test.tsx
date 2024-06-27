// import { useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const data = {
//   alarmData: [
//     { name: 'TT Raised', value: 19 },
//     { name: 'TT Pending', value: 54 },
//   ],
//   deviceDownData: [
//     { name: 'TT Raised', value: 184 },
//     { name: 'TT Pending', value: 228 },
//   ],
//   linkDownData: [
//     { name: 'TT Raised', value: 401 },
//     { name: 'TT Pending', value: 125 },
//   ],
//   linkFlapData: [
//     { name: 'TT Raised', value: 7 },
//     { name: 'TT Pending', value: 4 },
//   ],
//   OSPFDownData: [
//     { name: 'TT Raised', value: 13 },
//     { name: 'TT Pending', value: 13 },
//   ],
// };

// const Test = () => {
//   return (
//     <div>
//       {Object.keys(data).map((key, i) => (
//         <>
//           <h3>{key}</h3>
//           {data[key].map((item, index) => (
//             <>
//               <p key={index}>{item.name}</p>
//               <p key={index}>{item.value}</p>
//             </>
//           ))}
//         </>
//       ))}
//     </div>
//   );
// };

// export default Test;

import { useEffect } from 'react';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const fetchData = async () => {
  console.log(axios.get('src/data.json'));
  const response = await axios.get('src/data.json'); // Path to your local JSON file
  return response.data;
};

const Test = () => {
  const { isLoading, error, data: fetchedData } = useQuery('data', fetchData);

  useEffect(() => {
    // Optionally, you can do something when data changes or on component mount
    console.log('Fetched Data:', fetchedData);
  }, [fetchedData]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {Object.keys(fetchedData).map((key, i) => (
        <div key={i}>
          <h3>{key}</h3>
          {fetchedData[key].map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Test />
  </QueryClientProvider>
);

export default App;
