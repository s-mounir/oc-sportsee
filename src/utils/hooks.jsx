import { useState, useEffect } from 'react'
import DataModel from './DataModel';

export function useFetch(id) {
  const [response, setResponse] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [userExist, setUserExist] = useState(true)
  const data = new DataModel();

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
              data.setUser(dataUser)
              data.setActivity(dataActivity)
              data.setSessions(dataSessions)
              data.setPerformance(dataPerformance)

              setResponse({
                user: data.getUser(),
                activity: data.getActivity(),
                sessions: data.getSessions(),
                performance: data.getPerformance()
              })
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
  return { isLoading, response, error, userExist }
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