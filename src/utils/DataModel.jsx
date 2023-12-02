class DataModel {

    dayLetter(num){
        const days = ['L','M','M','J','V','S','D']
        return days[num-1];
    }

    transformPerformance(data){
        Object.keys(data).forEach(key => {data[key]=this.performanceFrench(data[key])})
        return data;
    }

    performanceFrench(kind){
        const kinds = {
            intensity: 'Intensité',
            speed: 'Vitesse',
            strength: 'Force',
            endurance: 'Endurance',
            energy: 'Energie',
            cardio: 'Cardio',
        }
        return kinds[kind]
    }

    setUser(user){
        this.user = {
            id: user.data.id,
            firstName: user.data.userInfos.firstName,
            lastName: user.data.userInfos.lastName,
            age: user.data.userInfos.age,
            score: user.data.todayScore || user.data.score,
            keyData: {
                calorieCount: user.data.keyData.calorieCount,
                proteinCount: user.data.keyData.proteinCount,
                carbohydrateCount: user.data.keyData.carbohydrateCount,
                lipidCount: user.data.keyData.lipidCount,
            }
        }
    }

    setActivity(activity){
        this.activitySessions = activity.data.sessions.map((d)=>({day:Number(d.day.slice(-2)),kilogram:d.kilogram,calories:d.calories}));
    }

    setSessions(sessions){
        this.averageSessions = sessions.data.sessions.map((d)=>({day:this.dayLetter(d.day),sessionLength:d.sessionLength}));
    }

    setPerformance(performance){
        this.performance = {kind:this.transformPerformance(performance.data.kind),
            data:performance.data.data}
    }

    getUser(){
        return this.user;
    }
    getActivity(){
        return this.activitySessions;
    }
    getSessions(){
        return this.averageSessions;
    }
    getPerformance(){
        return this.performance;
    }
}

export default DataModel;