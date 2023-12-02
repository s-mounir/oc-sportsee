class DataModel {
    constructor(user,activity,sessions,performance){
        this.id = user.data.id;
        this.firstName = user.data.userInfos.firstName;
        this.lastName = user.data.userInfos.lastName;
        this.age = user.data.userInfos.age;
        this.score = user.data.todayScore || user.data.score;
        this.calorieCount = user.data.keyData.calorieCount;
        this.proteinCount = user.data.keyData.proteinCount;
        this.carbohydrateCount = user.data.keyData.carbohydrateCount;
        this.lipidCount = user.data.keyData.lipidCount;
        this.activitySessions = activity.data.sessions.map((d)=>({day:Number(d.day.slice(-2)),kilogram:d.kilogram,calories:d.calories}));
        this.averageSessions = sessions.data.sessions.map((d)=>({day:this.dayLetter(d.day),sessionLength:d.sessionLength}));
        this.performance = {kind:this.transformPerformance(performance.data.kind),
                            data:performance.data.data}
    }

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

    
}

export default DataModel;