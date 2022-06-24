import Logger from "./Logger.js";

new Logger({
    message: "This is a normal message\n"
})

new Logger({
    error: true,
    message: "This is an error message\n"
})

new Logger({
    warning: true,
    message: "This is a warning message\n"
})

new Logger({
    info: true,
    message: "This is an info message\n"
})

new Logger({
    success: true,
    message: "This is a success message\n"
})
