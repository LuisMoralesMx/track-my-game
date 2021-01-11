import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-game",
  templateUrl: "./add-game.component.html",
  styleUrls: ["./add-game.component.scss"],
})
export class AddGameComponent implements OnInit {
  @Output() addGame = new EventEmitter<any>();

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
    this.addGame.emit(this.addForm.value);
  };
}
