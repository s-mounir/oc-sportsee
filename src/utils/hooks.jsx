import { useState, useEffect } from 'react'

export function useFetch(id) {
  const [dataUser, setDataUser] = useState({})
  const [dataActivity, setDataActivity] = useState({})
  const [dataSessions, setDataSessions] = useState({})
  const [dataPerformance, setDataPerformance] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return

    const requestUser = fetch('http://localhost:3000/user/12').then(response => response.json());
    const requestActivity = fetch('http://localhost:3000/user/12/activity').then(response => response.json());
    const requestSessions = fetch('http://localhost:3000/user/12/activity').then(response => response.json());
    const requestPerformance = fetch('http://localhost:3000/user/12/activity').then(response => response.json());
    
    setLoading(true)

    Promise.all([requestUser, requestActivity, requestSessions, requestPerformance])
        .then(([dataUser, dataActivity, dataSessions, dataPerformance]) => {
            setDataUser(dataUser);
            setDataActivity(dataActivity);
            setDataSessions(dataSessions);
            setDataPerformance(dataPerformance);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        }
        );
    },[id])
  return { isLoading, dataUser, dataActivity, dataSessions, dataPerformance, error }
}