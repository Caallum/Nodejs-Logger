import chalk from "chalk";
import moment from "moment";

export default class Logger {
    constructor(data) {
        this.log(data);
    }

    async log(data) {
        if (data.error) {
            return console.log(`${chalk.bgRed(`[Logger]`)} ${await this.line()} ${data.message}`)
        }

        if(data.success) {
            return console.log(`${chalk.bgGreen(`[Logger]`)} ${await this.line()} ${data.message}`)
        }

        if(data.warning) {
            return console.log(`${chalk.bgYellow(`[Logger]`)} ${await this.line()} ${data.message}`)
        }

        if(data.info) {
            return console.log(`${chalk.bgBlue(`[Logger]`)} ${await this.line()} ${data.message}`)
        }

        return console.log(`${chalk.bgWhite(`[Logger]`)} ${await this.line()} ${data.message}`)
    }

    async getTime() { return moment().format('YYYY-MM-DD HH:mm:ss') };

    async line(num = 2) {
        const e = new Error();
        let location = e.stack.split("\n")[4];
        location = location.split("src/")[1];
        if(location.endsWith(")")) location = location.slice(0, (location.length - 1))

        const time = await this.getTime();
        return `${time} - ${location}`
    }
}
