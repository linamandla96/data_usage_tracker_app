export default function DataUsageTracker(db) {

    async function registerUser(first_name, last_name, email) {

    const regUser =    await pool.query('insert into learner (name,surname,emailAddress) values($1,$2,$3)', [first_name, last_name,email])
     return regUser.rows[0];
    }

    async function findUser(usercode) {
        const code = await pool.query('select usercode from learner WHERE usercode= $1', [usercode])
        return code.rows[0];
    }

    
     async function registerAppUsage(usercode, app_id, minUsed) {

        const regAppUsage=    await pool.query('insert into learner_application_usage (appId,usercode,minUse) values($1,$2,$3)', [usercode,app_id,minUsed])
        return regAppUsage.rows[0];
    
    }

    async function totalCostPerUser(usercode) {
        totalCost = await pool.query('select sum(data_balance) from learner WHERE usecode = $1 ',[usercode])
        return  totalCost.rows
    }
     async function totalUsage() {
       total  = await pool,query('select sum(minutes_used) from learner_application_usage')
       return total.rows;

    }
     async function availableData(usercode) {
        totalUsageUsed  = await pool,query('select sum(usage_per_minute) from application name = $1',[usercode])
        return total.rows;
 
    }
    function mostUsedApp(usercode) {
        const mostUseApp =('select sum(minutes_used) from learner_application_usage  join application on application.app_id = learner_application_usage .id  where name = $1', [usercode]);
        return mostUseApp.rows[0];

    }
    function sendDataToAnotherUser(from_user_code, to_user_code, airtime) {

    }




    return {
        registerUser,
        findUser,
        registerAppUsage,
        totalCostPerUser,
        totalUsage,
        availableData,
        mostUsedApp,
        sendDataToAnotherUser,

    }
}  