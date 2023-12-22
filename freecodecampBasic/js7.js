//1
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Если значение пустое, удаляем свойство prop из альбома
    delete records[id][prop];
  } else if (prop !== "tracks" ) {
    // Если prop не "tracks" и значение не пустое, присваиваем значение свойству альбома
    records[id][prop] = value;
  } else {
    // Если prop - "tracks" и значение не пустое
    if (!records[id].hasOwnProperty("tracks")) {
      // Если у альбома нет свойства "tracks", создаем пустой массив
      records[id]["tracks"] = [];
    }
    // Добавляем значение в конец массива "tracks" альбома
    records[id]["tracks"].push(value);
  }
    return records;
  }

  
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
  console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));
  console.log(updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide'));

  //2
  function countdown(n){
    if (n < 1) {
    return []; // базовый случай: возвращаем пустой массив, если n меньше 1
  } else {
    const countArray = countdown(n - 1); // рекурсивный случай: вызываем саму себя с уменьшенным n
    countArray.unshift(n); // добавляем текущее значение n в массив
    return countArray; // возвращаем массив
  }
  
}
console.log(countdown(8));