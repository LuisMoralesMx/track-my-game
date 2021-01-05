import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-game",
  templateUrl: "./add-game.component.html",
  styleUrls: ["./add-game.component.scss"],
})
export class AddGameComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: [],
      platform: [],
      genre: [],
      progress: [],
    });
  }

  addGames: any = () => {
    console.log(this.addForm.value);
  };
}
