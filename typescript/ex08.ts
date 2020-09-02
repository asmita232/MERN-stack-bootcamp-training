type Time = {
    hours: number,
    minutes: number,
    second: number
}

type ClockType = 'digital' | 'analog'
interface IClock {
    ClockType: ClockType,
    time?: Time,
    setTime: (hours: number, minutes: number, second: number)=> void
   
   getTime: () => string | null
}

let time1: IClock = {
    ClockType : 'digital',
    setTime(hours: number, minutes: number, second: number) {
       this.time = {
        hours : hours,
        minutes : minutes,
        second : second
       } 
    },

    getTime() {
        let timeString: string | null = this.time? `${this.time.hours}-${this.time.minutes} - ${this.time.second}`: null
        return timeString
    }
}

time1.setTime(10,20,30)
console.log(time1.getTime())