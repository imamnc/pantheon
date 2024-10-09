import moment from "moment";

export const DateFormatter = {
    // Custom format date
    format: (date: string, format: string = 'DD-MM-YYYY HH:mm:ss') => {
        return moment(date).format(format)
    },
    // Format date relative from current date
    relativeTime: (date: string, format: string = 'DD-MM-YYYY HH:mm') => {
        var now = moment()
        var target = moment(date)
        var dayDiff = now.diff(target, 'day')
        if (dayDiff > 0) {
            return moment(date).format(format)
        } else {
            return moment(date).fromNow()
        }
    }
}
