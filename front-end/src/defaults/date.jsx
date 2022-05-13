const date = new Date();

export function verifyDate(final_date){
    const final_year = final_date.substring(0,4)
    const final_month = final_date.substring(5,7)
    const final_day = final_date.substring(8,10)
    
    if(final_year < date.getFullYear()){
        return false
    }else if(final_month < (date.getMonth()+1) && final_year <= date.getFullYear()){
        return false
    }else if(final_day< date.getDate() && final_month <= (date.getMonth()+1)){
        return false
    }else{
        return true
    }
}
