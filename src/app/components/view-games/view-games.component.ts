import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { GAMES_LIST_MOCK } from "src/app/mocks/games-list.mock";
import { Games } from "src/app/models/games";

@Component({
  selector: "app-view-game",
  templateUrl: "./view-games.component.html",
  styleUrls: ["./view-games.component.scss"],
})
export class ViewGamesComponent implements OnInit {
  @ViewChild("addGameDialog", { static: true }) addGameDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  dataSource!: MatTableDataSource<Games>;
  gameList: Games[] = GAMES_LIST_MOCK;
  displayedColumns: string[] = ["name", "platform", "genre", "progress"];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Games>(GAMES_LIST_MOCK);
  }

  openDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  addGame = (event: any) => {
    this.gameList.push(event)
    this.dataSource = new MatTableDataSource<Games>(this.gameList);
    this.dialog.closeAll();
  }
}
