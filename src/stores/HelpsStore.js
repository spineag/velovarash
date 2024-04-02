import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useHelpsStore = defineStore('helpsStore', () => {
    // let url = 'https://velovarash.pp.ua/src/assets/img/helps/';
    let url = '../../src/assets/img/helps/';
    const helps = ref([
        {id:1, name:'Володимир', phone:'099 996 89 89', ava:'https://cdn-icons-png.flaticon.com/256/5556/5556468.png', 
            bg:url+'repair1.jpg',
            list:['Сервісний огляд 1', 'Сервісний огляд 2', "Сервісний огляд 3", "Сервісний огляд 4", "Сервісний огляд 5", "Сервісний огляд 6"]},
        {id:2, name:'Іван', phone:'069 111 32 22', ava:'https://freeiconshop.com/wp-content/uploads/edd/person-flat.png', 
            bg:url+'repair2.jpg',
            list:['Сервісний огляд 2', 'Сервісний огляд 4', "Сервісний огляд 7", "Сервісний огляд 8", "Сервісний огляд 12"]},
        {id:3, name:'Петрович', phone:'050 231 29 22', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqLPrJauXyCkhaWy1eDWiPRrYmZH7uJpqOwJeZ_JeFg&s', 
            bg:url+'repair3.jpg',
            list:['Сервісний огляд 11', 'Сервісний огляд 1', "Сервісний огляд 7", "Сервісний огляд 9", "Сервісний огляд 10", "Сервісний огляд 16"]},
        {id:5, name:'Василій', phone:'093 546 22 62', ava:'https://cdn-icons-png.flaticon.com/256/4439/4439947.png', 
            bg:url+'repair4.jpg',
            list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:6, name:'Олег', phone:'069 111 32 22', ava:'https://cdn-icons-png.flaticon.com/256/921/921015.png', 
            bg:url+'repair5.jpg',
            list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:7, name:'Олександр', phone:'073 111 32 22', ava:'https://cdn-icons-png.flaticon.com/256/1730/1730748.png', 
            bg:url+'repair6.jpg',
            list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:8, name:'Михасько', phone:'068 676 32 65', ava:'https://cdn-icons-png.flaticon.com/256/5556/5556458.png', 
            bg:url+'repair7.jpg',
            list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
    ]);

    return { helps, }
});