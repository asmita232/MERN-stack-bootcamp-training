function log(message:string, format?:('standard' | 'verbose')): null {
  
    if(message && !format) {
        console.log(message)
        return
    }
    if(format) {
        if(format === 'standard') {
            console.log(message)
        }
        else if(format === 'verbose') {
            message += (new Date()).getDate()

            console.log(message)
        }
    }
}

log('hello')
log('hello', 'verbose')