function getFilesToBackup(lastBackup, changes) {
    let dic = {};
    [...changes].sort((a, b) => a[0] - b[0])
        .filter(element => {
            if (element[1] > lastBackup) {
                dic[element[0]] = element[0];
            }
        });
    return Object.keys(dic).length !== 0 ? Object.values(dic) : [];
}



const lastBackup = 1546300800
const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
];
/*   const changes = [
    [ 3, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300300 ],
    [ 1, 1546300000 ]
  ]; */
const result = getFilesToBackup(lastBackup, changes);
console.log(result);
module.exports = getFilesToBackup;