import { useState, useEffect } from 'react'

function dataUserCleaning(data){
  if(!data.data.todayScore){
    data.data.todayScore = data.data.score;
  }
  return data;
}

export function useFetch(id) {
  const [dataUser, setDataUser] = useState({})
  const [dataActivity, setDataActivity] = useState({})
  const [dataSessions, setDataSessions] = useState({})
  const [dataPerformance, setDataPerformance] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [userExist, setUserExist] = useState(true)

  useEffect(() => {
    if (!id) return

    const requestUser = fetch(`http://localhost:3000/user/${id}`).then(response => response.json());
    const requestActivity = fetch(`http://localhost:3000/user/${id}/activity`).then(response => response.json());
    const requestSessions = fetch(`http://localhost:3000/user/${id}/average-sessions`).then(response => response.json());
    const requestPerformance = fetch(`http://localhost:3000/user/${id}/performance`).then(response => response.json());
    
    setLoading(true)

    Promise.all([requestUser, requestActivity, requestSessions, requestPerformance])
        .then(([dataUser, dataActivity, dataSessions, dataPerformance]) => {
            if(dataUser==='can not get user'){
              setUserExist(false);
            }else{
              const cleanedDataUser = dataUserCleaning(dataUser);
              setDataUser(cleanedDataUser);
              setDataActivity(dataActivity);
              setDataSessions(dataSessions);
              setDataPerformance(dataPerformance);
            }
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        }
        );
    },[id])
  return { isLoading, dataUser, dataActivity, dataSessions, dataPerformance, error, userExist }
}


export function useContainerDimensions(myRef,width,setWidth) {

  useEffect(() => {
    const getDimensions = () => ((myRef && myRef.current.offsetWidth) || 0);

    const handleResize = () => {
      setWidth(getDimensions());
    };

    if (myRef.current) {
      setWidth(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);
  return width;
}