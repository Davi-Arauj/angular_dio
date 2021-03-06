import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarComponent } from "src/app/shared/component/star.component";
import { AppPipeModule } from "../shared/pipe/app.pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        StarComponent
         ],
    imports:[
        CommonModule,
        FormsModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'course/info/:id', component: CourseInfoComponent
              }
        ])

    ]
})
export class CourseModulo{}