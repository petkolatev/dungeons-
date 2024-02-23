function playList(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;

        }
    }
    let playListSongs = []
    let playListLength = arr.shift()
    let typeList = arr.pop()
    for (let i = 0; i < playListLength; i++) {
        let [type, name, time] = arr[i].split('_')
        let song = new Song(type, name, time)
        playListSongs.push(song)
    }
    if (typeList === 'all') {
        playListSongs.forEach((i) => console.log(i.name));
    } else {
        let filtred = playListSongs.filter((i) => i.type === typeList);
        filtred.forEach((i) => console.log(i.name));
    }

}
playList([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])