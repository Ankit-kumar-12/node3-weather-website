const request= require('request')
const forecast=function(latitude,longitude,callback){
    const url='http://api.weatherstack.com/current?access_key=17c4e7ed26756bf2b9bbcb8d29858ec3&query='+ latitude + ','+ longitude +'&units=m'
    request({ url:url,json: true },function(error,response){
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
     }else{
         callback(undefined,response.body.current.weather_descriptions[0]+ ". It is currently " + response.body.current.temperature +" degrees out. It feels like "+ response.body.current.feelslike +" degree out.")
     }
        
})
    
}
module.exports=forecast