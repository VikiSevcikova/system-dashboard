const os = require('os');
const checkDiskSpace = require('check-disk-space').default;

let totalM, freeM;
if(process.platform === 'win32'){
    checkDiskSpace('C:/').then((diskSpace) => {
        console.log(diskSpace)
        totalM = diskSpace.size;
        freeM = diskSpace.free;
        // {
        //     diskPath: 'C:',
        //     free: 12345678,
        //     size: 98756432
        // }
        // Note: `free` and `size` are in bytes
    })
}else if(process.platform === 'linux' || process.platform === 'darwin'){
    checkDiskSpace('/mnt/').then((diskSpace) => {
        console.log(diskSpace)
        totalM = diskSpace.size;
        freeM = diskSpace.free;
        // {
        //     diskPath: 'C:',
        //     free: 12345678,
        //     size: 98756432
        // }
        // Note: `free` and `size` are in bytes
    })
}

exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "You got access to the private data in this route.",
            os: {
                architecture: os.arch(),
                platform: os.platform(),
                cpus: os.cpus(),
                freeMem: freeM,
                totalMem: totalM,
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