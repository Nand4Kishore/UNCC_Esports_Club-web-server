const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const events = [
{
    id:'1',
    Title: 'Counter Strike',
    details: 'We are playing office map. Looking for 6 more people to form a 10 members team',
    createdBy: 'Nanda',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    Type:'FPS Games',
    Location:'Woodward hall, 232',
    starttime : "11:00 PM",
    endtime: "2:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
},
{
    id:'2',
    Title: 'League of legends',
    details: 'Looking for 3 players. Anyone who is interested to play multiplayer can join me.If we have 8 people we can create our own room/Arena',
    createdAt: DateTime.local(2021, 2 , 12, 18,0).toLocaleString(DateTime.DATETIME_SHORT),
    Location:'Woodward hall, 230',
    Type:'Moba Games',
    createdBy: ' Kishore',
    starttime : "10:00 PM",
    endtime: "2:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
}
,
{
    id:'3',
    Title: 'DOTA 2',
    details: 'Looking for 3 players. Anyone who is interested to play multiplayer can join me.If we have 8 people we can create our own room/Arena',
    createdBy: 'Kishore',
    createdAt: DateTime.local(2021, 2 , 12, 18,0).toLocaleString(DateTime.DATETIME_SHORT),
    Location:'Woodward hall, 232',
    Type:'Moba Games',
    starttime : "1:00 PM",
    endtime: "2:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
}
,
{
    id:'4',
    Title: 'Smite',
    details: 'Looking for 3 players. Anyone who is interested to play multiplayer can join me.If we have 8 people we can create our own room/Arena',
    createdBy: 'Kishore',
    createdAt: DateTime.local(2021, 2 , 12, 18,0).toLocaleString(DateTime.DATETIME_SHORT),
    Location:'Woodward hall, 232',
    Type:'Moba Games',
    starttime : "1:00 PM",
    endtime: "4:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
},
{
    id:'5',
    Title: 'Valorant',
    details: 'We are playing office map. Looking for 6 more people to form a 10 members team',
    createdBy: 'Nanda',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    Type:'FPS Games',
    Location:'Woodward hall, 232',
    starttime : "11:00 PM",
    endtime: "5:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
},
{
    id:'15',
    Title: 'Fortnite',
    details: 'We are playing office map. Looking for 6 more people to form a 10 members team',
    createdBy: 'Nanda',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    Type:'FPS Games',
    Location:'Woodward hall, 232',
    starttime : "11:00 PM",
    endtime: "12:00 AM",
    date: "3/16/2021",
    image:"normniner.png"
}
];

exports.find = () =>  events;

exports.findById = id => events.find(events=>events.id === id);


exports.save = function(event) {
    event.id = uuidv4();
    //event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    events.push(event);
} 

exports.updateById = function(id, newevent){
    let event = events.find(events=>events.id === id);
    if(event){
        event.Title = newevent.Title;
        event.details = newevent.details
        return true
    }else {
        return false;
    }
}

exports.deleteById = function(id){
    let index = events.findIndex(events=>events.id === id);
    if(index !== -1){
        events.splice(index, 1);
        return true;
    }else{
        return false;
    }
}

exports.groupBy = (array, key) => {
    return array.reduce((result, obj) => {
       (result[obj[key]] = result[obj[key]] || []).push(obj);
       return result;
    }, {});
 };