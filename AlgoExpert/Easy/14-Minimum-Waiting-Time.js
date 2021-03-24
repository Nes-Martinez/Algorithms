function minimumWaitingTime(queries) {
    queries.sort((a,b) => a-b);

    let totalTime = 0;
    for (let i =0; i < queries.length; i++) {
        const duration = queries[i];
        const queriesRemaining = queries.length - (i + 1);
        totalTime += duration * queriesRemaining
    }

    return totalTime;
}