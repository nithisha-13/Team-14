import { EventEmitter } from '@angular/core';
import { Course } from '../models/course.model';

export class CourseService {
    courses : Course[] = [
        {
            courseName:"B.E CSE",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        {
            courseName:"B.E EEE",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        {
            courseName:"B.E ECE",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        {
            courseName:"B.Tech IT",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        {
            courseName:"B.E CSBS",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        {
            courseName:"B.E AIDS",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our lives."
        },

        
    ];
    courseSelectedEvent = new EventEmitter<Course>();

    getItems(): Course[] {
      return this.courses;
    }

}