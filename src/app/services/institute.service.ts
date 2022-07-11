import { EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { Institute } from '../models/institute.model';

export class InstituteService {
  institutes: Institute[] = [
    {
      id: 1,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotXMt4ujHNblJi6nQ21qJVbW1PKQcf8N2uA&usqp=CAU',
      name: 'PSG College Of Technology',
      phone: '044-27417499',
      email: 'infodesk@psgist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 2,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBasWoeWXRipMYZbCzOu4z8jdisKPi3OAZbg&usqp=CAU',
      name: 'Loyola College',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hdaYQUSvRMlpdUXpn-dqPGJkqYSNCXCDeQ&usqp=CAU',
      name: 'Indian Institute of Science',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 4,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgdgFWzxbj9EIquxfM4TIqSSDKP7kU4cfBw&usqp=CAU',
      name: 'Panjab University',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWC-CW_y63VM4jAeqaPMIOhyEfDvkkH9G1A&usqp=CAU',
      name: 'Kumaraguru College of Technology',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 6,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXgVQliFsPhBriDs_kgy734WfML4ZezAqIQ&usqp=CAU',
      name: 'Bannari Amman Institute ',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 7,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9YOHo10q8tL6WGr0DUu9eMVMoDLWdxS6zA&usqp=CAU',
      name: 'Stella Maris College',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 8,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRzOki-JthcI1K1dV3FPNBLkHXxwG4ZvgbQ&usqp=CAU',
      name: 'Sri Sai Ram Engineering College',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
    {
      id: 9,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB7TgvZans4gt8zEJ8iIki1QkCif-DXuQlA&usqp=CAU',
      name: 'SRM Institute Of Technology',
      phone: '044-27417499',
      email: 'infodesk@srmist.edu.in',
      location: 'Kattankulathur, Chengalpattu District, Tamil Nadu.',
    },
  ];

  itemSelectedEvent = new EventEmitter<Institute>();

  getItems(): Institute[] {
    return this.institutes;
  }
}
