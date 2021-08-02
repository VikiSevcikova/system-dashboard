const os = require('os');

exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "You got access to the private data in this route.",
            os: {
                architecture: os.arch(),
                platform: os.platform(),
                cpus: os.cpus(),
                freeMem: os.freemem(),
                totalMem: os.totalmem(),
                hostname: os.hostname(),
                loadAvg: os.loadavg(),
                networkInterfaces: os.networkInterfaces(),
                type: os.type(),
                release: os.release(),
                uptime: os.uptime()
            }
        }
    })
}