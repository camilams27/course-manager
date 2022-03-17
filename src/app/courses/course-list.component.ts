import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];
    _filterBy!: string;

    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }

    set filter(value:string){
        this._filterBy = value;
    }

    get filter(){
        return this._filterBy;
    }


}