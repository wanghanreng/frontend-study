class TimeUtil {  
    /**  
     * 格式化时间戳  
     * @param timestamp - Unix 时间戳  
     * @param format - 格式化字符串，默认是 'YYYY-MM-DD HH:mm:ss'  
     * @returns 格式化后的时间字符串  
     */  
    static format(
        timestamp: number, 
        format: string = "YYYY-MM-DD HH:mm:ss"
    ): string {  
        const date = new Date(timestamp * 1000);  
        const map: { [key: string]: string } = {  
            YYYY: date.getFullYear().toString(),  
            MM: String(date.getMonth() + 1).padStart(2, "0"),  
            DD: String(date.getDate()).padStart(2, "0"),  
            HH: String(date.getHours()).padStart(2, "0"),  
            mm: String(date.getMinutes()).padStart(2, "0"),  
            ss: String(date.getSeconds()).padStart(2, "0"),  
        };  

        return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);  
    }  

    /**  
     * 计算时间差  
     * @param timestamp - Unix 时间戳  
     * @returns 描述时间差的字符串  
     */  
    static timeAgo(timestamp: number): string {  
        const now = Date.now();  
        const timeDiff = now - timestamp * 1000;  

        const seconds = Math.floor(timeDiff / 1000);  
        const minutes = Math.floor(seconds / 60);  
        const hours = Math.floor(minutes / 60);  
        const days = Math.floor(hours / 24);  
        const years = Math.floor(days / 365);  
        
        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;  
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;  
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;  
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;  
        return "just now";  
    }  

    /**  
     * 检查给定的时间戳是否是今天  
     * @param timestamp - Unix 时间戳  
     * @returns 如果是今天返回 true，否则返回 false  
     */  
    static isToday(timestamp: number): boolean {  
        const date = new Date(timestamp * 1000);  
        const today = new Date();  
        return (  
            date.getDate() === today.getDate() &&  
            date.getMonth() === today.getMonth() &&  
            date.getFullYear() === today.getFullYear()  
        );  
    }  
}  

export default TimeUtil;