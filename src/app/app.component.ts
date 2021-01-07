import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  iscoursedisplay = false;
  isstudentdisplayed = false;
  isCourseSelected = true;
  coursearray = [];
  studentarray = [];
  courseName;
  courseSelect;
  studentName;
  studentDname = [];
  courseDname: Object;
  cidcount = 0;
  sidcount = 0;
  selectedCourse: any;
  studentList;
  constructor() {}
  // to show textbox of  addcourse

  addcourse() {
    this.iscoursedisplay = true;
  }

  //to show the textbox  of  add student

  addstudent() {
    this.isstudentdisplayed = true;
  }

  //to get the selected coursename and get appropriate students name

  selectChangeCourse(courseSelect: any) {
    this.isCourseSelected = false;
    this.studentList = "";
    this.studentDname = [];
    // console.log('course selected');
    this.selectedCourse = courseSelect;
    this.studentDname = this.coursearray[this.selectedCourse].students;
    // console.log(this.selectedCourse);
  }

  // hide course add area X

  chide() {
    this.iscoursedisplay = false;
  }

  // hide student add area X

  shide() {
    this.isstudentdisplayed = false;
  }

  // add new course to the dropdown

  addcourselist() {
    this.courseDname = {
      id: this.cidcount,
      course: this.courseName,
      students: []
    };
    this.cidcount++;
    this.coursearray.push(this.courseDname);
    console.log(this.coursearray);
    this.courseName = " ";
    this.chide();
  }

  // add new student to the dropdown

  addstudentlist() {
    this.coursearray[this.selectedCourse].students.push(this.studentName);
    this.studentName = " ";
    this.shide();
  }

  ngOnInit(): void {}
}
