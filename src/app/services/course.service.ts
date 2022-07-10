import { EventEmitter } from '@angular/core';
import { Course } from '../models/course.model';

export class CourseService {
    courses : Course[] = [
        {
            courseName:"B.E CSE",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Computer Science is a dynamic and fast growing area that has become an integral part of our daily lives."
        },

        {
            courseName:"B.E ECE",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:200,
            courseDis:"Over the last decade, electronics and communication systems have become an integral part of our lives."
        },

        {
            courseName:"B.TEC IT",
            courseDuration:"4 years",
            courseTiming:"8:30am to 4:00pm",
            noStudent:100,
            courseDis:"Over the last 25-30 years, we have witnessed extraordinary developments in the field of information technology."
        },

        
    ];
    courseSelectedEvent = new EventEmitter<Course>();

    getItems(): Course[] {
      return this.courses;
    }

}