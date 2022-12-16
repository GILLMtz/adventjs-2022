const getFilesToBackup = require("./index");


it('should be [1,3]', () => {
    const lastBackup = 1546300800
    const changes = [
        [3, 1546301100],
        [2, 1546300800],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000]
    ];
    const result = getFilesToBackup(lastBackup, changes);
    expect(result).toEqual([1, 3]);
});



it('should be [1,2,3]', () => {
    const lastBackup = 1546300600;
    const changes = [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ];
    const result = getFilesToBackup(lastBackup, changes);
    expect(result).toEqual([1,2,3]);
});
////////////////


it('should be []', () => {
    const lastBackup = 1556300600;
    const changes = [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ];
    const result = getFilesToBackup(lastBackup, changes);
    expect(result).toEqual([]);
});


it('should be []', () => {
    const lastBackup = 1556300600;
    const changes = [];
    const result = getFilesToBackup(lastBackup, changes);
    expect(result).toEqual([]);
});

