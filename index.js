// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activityToday = "go to the office") {
    return `This Monday, I will ${activityToday}.`;
};

function wrapAdjective(visFlair = "*") {
    const descriptionOfYou = function(adjective = "special") {
        return `You are ${visFlair}${adjective}${visFlair}!`;
    };
    return descriptionOfYou;
}
// wrapAdjective("%")("a dedicated programmer");