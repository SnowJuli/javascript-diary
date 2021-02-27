const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

function pwdCheck() {
    const secretPwd = "sup3rs3cretp4s5w0rd"
    readline.question("Enter your Password: ", pwd => {
        if (secretPwd == pwd) {
            console.log("Welcome back :D")
            readline.close()
        }
        else {
            console.log("Access denied...")
            readline.close()
        }
    })
}

pwdCheck()