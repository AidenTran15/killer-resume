import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://killer-resume-api-tau.vercel.app')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
