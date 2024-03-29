import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useHelpsStore = defineStore('helpsStore', () => {
    const helps = ref([
        {id:1, name:'Володимир', phone:'099 996 89 89', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 2', "Сервісний огляд 3", "Сервісний огляд 4", "Сервісний огляд 5", "Сервісний огляд 6"]},
        {id:2, name:'Іванович', phone:'069 111 32 22', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 2', 'Сервісний огляд 4', "Сервісний огляд 7", "Сервісний огляд 8", "Сервісний огляд 12"]},
        {id:3, name:'Петрович', phone:'050 231 29 22', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 11', 'Сервісний огляд 1', "Сервісний огляд 7", "Сервісний огляд 9", "Сервісний огляд 10", "Сервісний огляд 16"]},
        {id:4, name:'Іванович', phone:'069 123 32 22', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:5, name:'Василій', phone:'093 546 22 62', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:6, name:'Олегович', phone:'069 111 32 22', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:7, name:'Олександр', phone:'073 111 32 22', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
        {id:8, name:'Михасько', phone:'068 676 32 65', bg:'https://c8.alamy.com/zooms/9/c89cf5f0abcd4d93aec8f456ff1d895d/pyen54.jpg', ava:'https://static.thenounproject.com/png/4035887-200.png',
        list:['Сервісний огляд 1', 'Сервісний огляд 3', "Сервісний огляд 5", "Сервісний огляд 8", "Сервісний огляд 13", "Сервісний огляд 18"]},
    ]);

    return { helps, }
});