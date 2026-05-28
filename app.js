const userDarseConfig = { serverId: 129, active: true };

const userDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_129() {
    return userDarseConfig.active ? "OK" : "ERR";
}

console.log("Module userDarse loaded successfully.");