import React from "react";
import { Text, View } from "react-native";
//component = function


const players = [
    { name: 'Messi', goals: 31 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
];


const isValidPlayer = ({name, goals} = {} ) => {
    return !!name && !!goals;
};

const tinh_max_goal = () => {
    let maxGoals = 0;
    let validPlayers = players.filter(player => {
        if (isValidPlayer(player)) {
            maxGoals = Math.max(maxGoals, player.goals);
            return true;
        }
        return false;
    });

    validPlayers = validPlayers.filter(player => player.goals === maxGoals);
    return validPlayers;
};

const hihi = () => {
    const maxgoal = tinh_max_goal();

    const allPlayers = players.filter(player => isValidPlayer(player));
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Danh sách cầu thủ hợp lệ:</Text>
            {allPlayers.map((player, index) => (
                <Text key={index}>{player.name}: {player.goals}</Text>
            ))}

            <Text>Cầu thủ có số bàn thắng cao nhất:</Text>
            {maxgoal.map((player, index) => (
                <Text key={index}>{player.name}: {player.goals}</Text>
            ))}
        </View>
    );
};

export default hihi